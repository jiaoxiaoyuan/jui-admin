import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

import { HttpExceptionFilter } from './common/filters/http-exception.filter';

import { setupSwagger } from './swagger';

async function bootstrap () {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(), {
        cors: true,
    });

    // 全局管道
    app.useGlobalPipes(new ValidationPipe());

    // 全局过滤器
    app.useGlobalFilters(new HttpExceptionFilter());


    //  app.setGlobalPrefix('api'); // 配置全局前缀

    // 注册 Swagger 的配置顺序
    setupSwagger(app);

    console.log('http://localhost:3001/api-doc');
    await app.listen(3001);
}
bootstrap();
