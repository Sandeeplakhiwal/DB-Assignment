import { IsNotEmpty } from 'class-validator';

export class InventoryDto {
  @IsNotEmpty()
  quantity: number;
}
