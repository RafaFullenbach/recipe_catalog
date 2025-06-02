import { Recipe } from "../entities/Recipe";

export interface RecipesRepository {
  create(recipe: Recipe): Promise<void>;
}