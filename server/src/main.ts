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

    //  app.setGlobalPrefix('api'); // 配置全局前缀
    // 注册 Swagger 的配置顺序
    setupSwagger(app);

    console.log('http://localhost:3001/api-doc');
    await app.listen(3001);
}
bootstrap();
