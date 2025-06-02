import { CreateRecipeUseCase } from './../../../application/recipes/use-case/CreateRecipeUseCase';
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from 'src/application/recipes/dto/CreateRecipeDto';

@Injectable()
export class RecipesService {
    constructor(private readonly  createRecipeUseCase:CreateRecipeUseCase){}

    async createRecipe(newRecipe:CreateRecipeDto){
        return await this.createRecipeUseCase.execute(newRecipe);
    }
}
