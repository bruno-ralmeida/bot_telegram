import { NestFactory } from '@nestjs/core';
import express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/public', express.static(join(__dirname, '..', '..', 'public')));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
