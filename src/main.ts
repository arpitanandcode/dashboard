import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const baseurl = config.get('BASEURL');
  app.setGlobalPrefix(baseurl);
  await app.listen(8888);
}
bootstrap();
