import { Module } from '@nestjs/common';
import { RecipesController } from './controllers/recipes.controller';
import { RecipesService } from './services/recipes.service';
import { CreateRecipeUseCase } from 'src/application/recipes/use-case/CreateRecipeUseCase';
import { InMemoryRecipesRepository } from './repositories/in-memory-recipes.repository';
import { RECIPES_REPOSITORY } from 'src/domain/recipes/tokens';
import { ListAllRecipesUseCase } from 'src/application/recipes/use-case/ListAllRecipesUseCase';
import { GetRecipeByIdUseCase } from 'src/application/recipes/use-case/GetRecipeByIdUseCase';

@Module({
    imports: [RecipesModule],
    controllers: [RecipesController],
    providers: [RecipesService, CreateRecipeUseCase, ListAllRecipesUseCase,GetRecipeByIdUseCase, {provide: RECIPES_REPOSITORY, useClass:InMemoryRecipesRepository}],
})

export class RecipesModule {}
