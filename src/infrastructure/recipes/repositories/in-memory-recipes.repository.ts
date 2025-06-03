import { GetRecipeByIdDto } from './../../../application/recipes/dto/GetRecipeByIdDto';
import { Injectable } from '@nestjs/common';
import { Recipe } from '../../../domain/recipes/entities/Recipe';
import { RecipesRepository } from '../../../domain/recipes/repositories/recipes-respository.interface';

@Injectable()
export class InMemoryRecipesRepository implements RecipesRepository {
  private recipes: Recipe[] = [];

  async create(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  async findAll():Promise<Recipe[]> {
    return this.recipes;
  }

  async show(recipeId:GetRecipeByIdDto):Promise<Recipe>{
    return this.recipes.find(r => r.id === recipeId.id);
  }
}
