import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DiscountDto } from './dto';

@Injectable({})
export class DiscountService {
  constructor(private prisma: PrismaService) {}

  async createNewDiscount(dto: DiscountDto) {
    try {
      const discount = await this.prisma.discount.create({
        data: {
          name: dto.name,
          desc: dto.desc,
          discount_percent: dto.discount_percent,
          active: dto.active,
        },
      });

      return { msg: 'Discount created successfully', discount };
    } catch (error) {
      throw error;
    }
  }
}
