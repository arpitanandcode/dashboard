import { Injectable } from '@nestjs/common';
import { transactionData } from './data/data';
import { TypeTransaction } from './data/transaction.interface';

@Injectable()
export class TransactionService {
  getTransactionData(): TypeTransaction[] {
    return transactionData;
  }
}
