import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  desc: string;

  @IsNotEmpty()
  SKU: string;

  @IsNotEmpty()
  category_id: number;

  @IsNotEmpty()
  inventory_id: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  discount_id: number;
}
