import { v4 as uuid } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from '../../../application/recipes/dto/CreateRecipeDto';
import { Recipe } from '../../../domain/recipes/entities/Recipe';
import { RECIPES_REPOSITORY } from '../../../domain/recipes/tokens';
import { RecipesRepository } from '../../../domain/recipes/repositories/recipes-respository.interface';

@Injectable()
export class CreateRecipeUseCase {
    constructor(@Inject(RECIPES_REPOSITORY) private readonly recipesRepository:RecipesRepository){}

    async execute(newRecipe:CreateRecipeDto):Promise<Recipe>{
        const now = new Date();

        const recipe:Recipe = new Recipe(
            uuid(),
            newRecipe.title,
            newRecipe.description,
            newRecipe.ingredients,
            now,
            now
        )

        await this.recipesRepository.create(recipe);

        return recipe;
    }
}

