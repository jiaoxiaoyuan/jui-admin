import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';

// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { setupSwagger } from './swagger';

async function bootstrap() {
    // const app = await NestFactory.create(AppModule);
    const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(), {
        cors: true,
    });

    // const options = new DocumentBuilder()
    //     .addBearerAuth() // token
    //     .setTitle('Cats API')
    //     .setDescription('The cats API description')
    //     .setVersion('1.0')
    //     .build();

    // const document = SwaggerModule.createDocument(app, options);
    // SwaggerModule.setup('/api-doc', app, document);

    // 注册 Swagger 的配置顺序
    setupSwagger(app);

    console.log('http://localhost:3001/api-doc');
    await app.listen(3001);
}
bootstrap();
