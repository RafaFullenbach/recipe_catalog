import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RECIPES_REPOSITORY } from '../../../domain/recipes/tokens';
import { RecipesRepository } from '../../../domain/recipes/repositories/recipes-respository.interface';
import { Recipe } from '../../../domain/recipes/entities/Recipe';
import { GetRecipeByIdDto } from '../dto/GetRecipeByIdDto';

@Injectable()
export class GetRecipeByIdUseCase {
    constructor(@Inject(RECIPES_REPOSITORY) private readonly recipesRepository: RecipesRepository) { }

    async execute(recipeId: GetRecipeByIdDto): Promise<Recipe> {
        return await this.recipesRepository.show(recipeId);
    }
}

