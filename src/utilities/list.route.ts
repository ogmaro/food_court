/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { INestApplication } from '@nestjs/common';

// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// export const listRoutes = (app: INestApplication) => {
// //Add documentation using swagger
// const config = new DocumentBuilder()
//     .setTitle('Food Court example')
//     .setDescription('The Food Court API description')
//     .setVersion('1.0')
//     .addTag('addons')
//     .build();
// const document = SwaggerModule.createDocument(app, config);
// SwaggerModule.setup('api/', app, document);

// const server = app.getHttpServer();
// const router = server._events.request._router;
// const availableRoutes: [] = router.stack
//     .map((layer) => {
//         if (layer.route) {
//             return {
//                 path: layer.route?.path,
//                 method: layer.route?.stack[0].method,
//             }
//         }
//     })
//     .filter((item) => item !== undefined);
// console.log(availableRoutes);
// }
