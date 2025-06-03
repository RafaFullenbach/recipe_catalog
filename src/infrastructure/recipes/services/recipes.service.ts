import { CreateRecipeUseCase } from './../../../application/recipes/use-case/CreateRecipeUseCase';
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from 'src/application/recipes/dto/CreateRecipeDto';
import { GetRecipeByIdDto } from 'src/application/recipes/dto/GetRecipeByIdDto';
import { GetRecipeByIdUseCase } from 'src/application/recipes/use-case/GetRecipeByIdUseCase';
import { ListAllRecipesUseCase } from 'src/application/recipes/use-case/ListAllRecipesUseCase';
import { Recipe } from 'src/domain/recipes/entities/Recipe';

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
