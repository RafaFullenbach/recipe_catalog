import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateRecipeDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    ingredients: string[];
}