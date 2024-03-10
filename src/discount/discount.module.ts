import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';

@Module({
  imports: [PrismaModule],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
