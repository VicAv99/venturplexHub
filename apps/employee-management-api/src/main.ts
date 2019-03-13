import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.port || 3333;

  app.setGlobalPrefix(`api`);
  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}`, 'Bootstrap');
  });
}

bootstrap();
