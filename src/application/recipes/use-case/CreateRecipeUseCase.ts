import { v4 as uuid } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from 'src/application/recipes/dto/CreateRecipeDto';
import { Recipe } from 'src/domain/recipes/entities/Recipe';
import { RECIPES_REPOSITORY } from 'src/domain/recipes/tokens';
import { RecipesRepository } from 'src/domain/recipes/repositories/recipes-respository.interface';

@Injectable()
export class CreateRecipeUseCase {
    constructor(private readonly recipesRepository:RecipesRepository){}

    @Inject(RECIPES_REPOSITORY)
    
    async execute(newRecipe:CreateRecipeDto){
        const now = new Date();

        const recipe = new Recipe(
            uuid(),
            newRecipe.title,
            newRecipe.description,
            newRecipe.ingredients,
            now,
            now
        )

        await this.recipesRepository.create(recipe);
    }
}

