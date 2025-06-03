import {IsNotEmpty, IsUUID } from "class-validator";

export class GetRecipeByIdDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;
}