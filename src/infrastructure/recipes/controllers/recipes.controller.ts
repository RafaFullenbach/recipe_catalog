import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateRecipeDto } from '../../../application/recipes/dto/CreateRecipeDto';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../../../domain/recipes/entities/Recipe';
import { ApiResponse } from '../../../application/recipes/response/ApiResponse';
import { GetRecipeByIdDto } from '../../../application/recipes/dto/GetRecipeByIdDto';
import { RecipePresenter } from '../../../application/recipes/response/RecipePresenter';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() newRecipe: CreateRecipeDto): Promise<ApiResponse<RecipePresenter>> {
        const recipe: Recipe = await this.recipesService.createRecipe(newRecipe);

        const recipePresenter = new RecipePresenter(recipe);

        const response: ApiResponse<RecipePresenter> = {
            message: "Receita criada com sucesso!",
            data: recipePresenter
        }

        return response;
    }

    @Get()
    async index(): Promise<ApiResponse<RecipePresenter[]>> {
        const recipes: Recipe[] = await this.recipesService.listAllRecipes();

        const recipesPresenter: RecipePresenter[] = recipes.map(recipe => new RecipePresenter(recipe));

        const message = recipes.length === 0
            ? "Nenhuma receita foi encontrada!"
            : "Listando receitas!";

        const response: ApiResponse<RecipePresenter[]> = {
            message: message,
            data: recipesPresenter
        }
        return response
    }

    @Get(':id')
    async show(@Param() recipeId: GetRecipeByIdDto): Promise<ApiResponse<RecipePresenter | string>> {
        const recipe: Recipe = await this.recipesService.getRecipeById(recipeId);

        if (!recipe) {
            return {
                message: "Nenhuma receita foi encontrada!",
                data: "" 
            };
        }

        const recipePresenter = new RecipePresenter(recipe);

        return {
            message: "Receita selecionada com sucesso!",
            data: recipePresenter
        };
    }

}
