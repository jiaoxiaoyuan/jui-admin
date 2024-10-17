import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .addBearerAuth() // token
        .setTitle('Cats API')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api-doc', app, document);

    console.log('http://localhost:3001/api-doc');
    await app.listen(3001);
}
bootstrap();
