import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RECIPES_REPOSITORY } from 'src/domain/recipes/tokens';
import { RecipesRepository } from 'src/domain/recipes/repositories/recipes-respository.interface';
import { Recipe } from 'src/domain/recipes/entities/Recipe';
import { GetRecipeByIdDto } from '../dto/GetRecipeByIdDto';

@Injectable()
export class GetRecipeByIdUseCase {
    constructor(@Inject(RECIPES_REPOSITORY) private readonly recipesRepository: RecipesRepository) { }

    async execute(recipeId: GetRecipeByIdDto): Promise<Recipe> {
        return await this.recipesRepository.show(recipeId);
    }
}

