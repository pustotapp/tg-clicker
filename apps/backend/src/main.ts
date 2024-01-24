import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config'

import { AppModule } from './app/app.module';

console.dir(process.env)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: '*',
    allowedHeaders: '*'
  });

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.getOrThrow('SERVER_PORT');

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
