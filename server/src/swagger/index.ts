import type { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const setupSwagger = (app: NestExpressApplication) => {
    // swagger
    const swaggerConfig = new DocumentBuilder()
        .addBearerAuth() // token
        .setTitle('梦享时间 API')
        .setDescription('梦享时间 backend API')
        .setVersion('1.0')
        .addTag('beta')
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/api-doc', app, document);
};
