import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('newcategory')
  createNewCategory(@Body() dto: CategoryDto) {
    return this.categoryService.createNewCategory(dto);
  }
}
