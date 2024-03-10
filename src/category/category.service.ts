import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto';

@Injectable({})
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createNewCategory(dto: CategoryDto) {
    try {
      const category = await this.prisma.product_category.create({
        data: {
          name: dto.name,
          desc: dto.desc,
        },
      });

      return { msg: 'Category created successfully', category };
    } catch (error) {
      throw error;
    }
  }
}
