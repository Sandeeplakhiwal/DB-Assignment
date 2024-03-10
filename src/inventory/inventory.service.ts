import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InventoryDto } from './dto';

@Injectable({})
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async createNewInventory(dto: InventoryDto) {
    try {
      const inventory = await this.prisma.product_inventory.create({
        data: {
          quantity: dto.quantity,
        },
      });

      return { msg: 'Inventory created successfully', inventory };
    } catch (error) {
      throw error;
    }
  }
}
