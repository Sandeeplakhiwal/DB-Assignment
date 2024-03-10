import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { InventoryModule } from './inventory/inventory.module';
import { DiscountModule } from './discount/discount.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    PrismaModule,
    ProductModule,
    CategoryModule,
    InventoryModule,
    DiscountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
