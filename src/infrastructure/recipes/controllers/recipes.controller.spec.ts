import { Test, TestingModule } from '@nestjs/testing';
import { RecipesController } from './recipes.controller';

describe('RecipesController', () => {
  let recipes: RecipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipesController],
    }).compile();

    recipes = module.get<RecipesController>(RecipesController);
  });

  it('should be defined', () => {
    expect(recipes).toBeDefined();
  });
});
