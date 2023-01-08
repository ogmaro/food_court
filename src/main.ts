import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/enviroment';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { listRoutes } from './utilities/list.route';
const { PORT, NODE_ENV } = env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Enable cors
  app.enableCors();

  //Added prefix
  app.setGlobalPrefix('v1/api');
  //Add documentation using swagger
  const config = new DocumentBuilder()
    .setTitle('Food Court (Addons API))')
    .setDescription(
      'This Documentation show the endpoints that power the endpoint',
    )
    .setVersion('1.0')
    .addTag('addons')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //Set PORT app to run
  await app.listen(PORT as unknown as number);
  console.log(
    `Application is running on: ${await app.getUrl()} in ${NODE_ENV} mode`,
  );
}

bootstrap();
