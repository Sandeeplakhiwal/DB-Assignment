import { Body, Controller, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryDto } from './dto';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Post('newinventory')
  createNewInventory(@Body() dto: InventoryDto) {
    return this.inventoryService.createNewInventory(dto);
  }
}
