import { CreateRecipeUseCase } from './../../../application/recipes/use-case/CreateRecipeUseCase';
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from '../../../application/recipes/dto/CreateRecipeDto';
import { GetRecipeByIdDto } from '../../../application/recipes/dto/GetRecipeByIdDto';
import { GetRecipeByIdUseCase } from '../../../application/recipes/use-case/GetRecipeByIdUseCase';
import { ListAllRecipesUseCase } from '../../../application/recipes/use-case/ListAllRecipesUseCase';
import { Recipe } from '../../../domain/recipes/entities/Recipe';

@Injectable()
export class RecipesService {
    constructor(
        private readonly createRecipeUseCase: CreateRecipeUseCase, 
        private readonly listAllRecipesUseCase: ListAllRecipesUseCase, 
        private readonly getRecipeByIdUseCase: GetRecipeByIdUseCase) { }

    async createRecipe(newRecipe: CreateRecipeDto): Promise<Recipe> {
        return await this.createRecipeUseCase.execute(newRecipe);
    }

    async listAllRecipes(): Promise<Recipe[]> {
        return await this.listAllRecipesUseCase.execute();
    }

    async getRecipeById(recipeId:GetRecipeByIdDto): Promise<Recipe> {
        return await this.getRecipeByIdUseCase.execute(recipeId);
    }
}
