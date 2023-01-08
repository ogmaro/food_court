import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/enviroment';
const { PORT, NODE_ENV } = env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1/api');
  await app.listen(PORT as unknown as number);
  console.log(
    `Application is running on: ${await app.getUrl()} in ${NODE_ENV} mode`,
  );

  const server = app.getHttpServer();
  const router = server._events.request._router;
  const availableRoutes: [] = router.stack
    .map((layer) => {
      if (layer.route) {
        return {
          route: {
            path: layer.route?.path,
            method: layer.route?.stack[0].method,
          },
        };
      }
    })
    .filter((item) => item !== undefined);
  console.log(availableRoutes);
}

bootstrap();
