import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/enviroment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1/api');
  await app.listen(env.PORT as unknown as number);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
