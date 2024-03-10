import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('newproduct')
  createNewProduct(@Body() dto: ProductDto) {
    return this.productService.createNewProduct(dto);
  }
}
