import { GetRecipeByIdDto } from './../../../application/recipes/dto/GetRecipeByIdDto';
import { Recipe } from "../entities/Recipe";

export interface RecipesRepository {
  create(recipe: Recipe);
  findAll();
  show(recipeId:GetRecipeByIdDto);
}