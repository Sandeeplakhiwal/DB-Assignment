import { IsNotEmpty } from 'class-validator';

export class DiscountDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  desc: string;

  @IsNotEmpty()
  discount_percent: number;

  @IsNotEmpty()
  active: boolean;
}
