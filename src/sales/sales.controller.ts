import { Controller, Get } from '@nestjs/common';
import { SalesService } from './sales.service';
import { TypeSales } from './data/sales.interface';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get('get')
  getSales(): TypeSales {
    return this.salesService.getSalesData();
  }
}
