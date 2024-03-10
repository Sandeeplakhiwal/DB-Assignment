import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductDto } from './dto';

@Injectable({})
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createNewProduct(dto: ProductDto) {
    // Create the new product in product table
    try {
      const product = await this.prisma.product.create({
        data: {
          name: dto.name,
          desc: dto.desc,
          SKU: dto.SKU,
          category_id: dto.category_id,
          inventory_id: dto.inventory_id,
          price: dto.price,
          discount_id: dto.discount_id,
        },
      });

      return { msg: 'Product create successfully', product };
    } catch (error) {
      // if the error is related to foreign key constraint failure
      if (error.code === 'P2002') {
        throw new NotFoundException(
          'Invalid category ID. Product category does not exist.',
        );
      }
      throw error;
    }
  }
}
