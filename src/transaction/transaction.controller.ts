import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TypeTransaction } from './data/transaction.interface';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('get')
  getTransactionData(): TypeTransaction[] {
    return this.transactionService.getTransactionData();
  }
}
