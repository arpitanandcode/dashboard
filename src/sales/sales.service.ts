import { Injectable } from '@nestjs/common';
import { TypeSales } from './data/sales.interface';
import { salesData } from './data/data';

@Injectable()
export class SalesService {
  getSalesData(): TypeSales {
    return salesData;
  }
}
