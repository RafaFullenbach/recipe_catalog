import { Test, TestingModule } from '@nestjs/testing';
import { CreateRecipeUseCase } from '../../../application/recipes/use-case/CreateRecipeUseCase';
import { RECIPES_REPOSITORY } from '../../../domain/recipes/tokens';
import { RecipesRepository } from '../../../domain/recipes/repositories/recipes-respository.interface';
import { CreateRecipeDto } from '../../../application/recipes/dto/CreateRecipeDto';

describe('CreateRecipeUseCase', () => {
  let useCase: CreateRecipeUseCase;
  let recipesRepositoryMock: Partial<RecipesRepository>;

  beforeEach(async () => {
    recipesRepositoryMock = {
      create: jest.fn(),  
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateRecipeUseCase,
        {
          provide: RECIPES_REPOSITORY,
          useValue: recipesRepositoryMock,
        },
      ],
    }).compile();

    useCase = module.get<CreateRecipeUseCase>(CreateRecipeUseCase);
  });

  it('Deve criar uma receita e chamar o método de criação do repositório', async () => {
    const input: CreateRecipeDto = {
      title: 'Bolo de cenoura',
      description: 'Bolo delicioso de cenoura',
      ingredients: ['ovos', 'leite', 'fermento'],
    };

    const result = await useCase.execute(input);

    expect(recipesRepositoryMock.create).toHaveBeenCalledTimes(1);
    expect(recipesRepositoryMock.create).toHaveBeenCalledWith(expect.objectContaining({
      title: input.title,
      description: input.description,
      ingredients: input.ingredients,
    }));

    expect(result).toHaveProperty('id');
    expect(result.title).toBe(input.title);
    expect(result.description).toBe(input.description);
    expect(result.ingredients).toEqual(input.ingredients);
    expect(result).toHaveProperty('createdAt');
    expect(result).toHaveProperty('updatedAt');
  });
});
