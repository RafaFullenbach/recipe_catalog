import { Module } from '@nestjs/common';
import { RecipesModule } from './infrastructure/recipes/recipes.module';

@Module({
  imports: [RecipesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
