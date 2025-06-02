import { Test, TestingModule } from '@nestjs/testing';
import { RecipesService } from './recipes.service';

describe('ServiceService', () => {
  let recipes: RecipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipesService],
    }).compile();

    recipes = module.get<RecipesService>(RecipesService);
  });

  it('should be defined', () => {
    expect(recipes).toBeDefined();
  });
});
