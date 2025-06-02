import { Body, Controller, Post } from '@nestjs/common';
import { CreateRecipeDto } from 'src/application/recipes/dto/CreateRecipeDto';
import { RecipesService } from '../services/recipes.service';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService){}

    @Post()
    async create(@Body() newRecipe:CreateRecipeDto):Promise<any>{
        return await this.recipesService.createRecipe(newRecipe);
    }
}
