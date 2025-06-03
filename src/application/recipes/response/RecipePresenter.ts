import { Recipe } from "src/domain/recipes/entities/Recipe";

export class RecipePresenter {
    id: string;
    title: string;
    description: string;
    createdAt: string;

    constructor(recipe: Recipe) {
        this.id = recipe.id;
        this.title = recipe.title;
        this.description = recipe.description;
        this.createdAt = recipe.createdAt.toISOString();
    }
}