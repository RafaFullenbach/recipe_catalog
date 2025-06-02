import { Injectable } from '@nestjs/common';
import { Recipe } from 'src/domain/recipes/entities/Recipe';
import { RecipesRepository } from 'src/domain/recipes/repositories/recipes-respository.interface';

@Injectable()
export class InMemoryRecipesRepository implements RecipesRepository {
  private recipes: Recipe[] = [];

  async create(recipe: Recipe): Promise<void> {
    this.recipes.push(recipe);
  }

}
