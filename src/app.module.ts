import { Module } from '@nestjs/common';
import { SalesModule } from './sales/sales.module';
import { TransactionModule } from './transaction/transaction.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SalesModule,
    TransactionModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
