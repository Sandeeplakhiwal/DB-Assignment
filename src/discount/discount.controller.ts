import { Body, Controller, Post } from '@nestjs/common';
import { DiscountDto } from './dto';
import { DiscountService } from './discount.service';

@Controller('discount')
export class DiscountController {
  constructor(private discountService: DiscountService) {}

  @Post('newdiscount')
  createNewDiscount(@Body() dto: DiscountDto) {
    return this.discountService.createNewDiscount(dto);
  }
}
