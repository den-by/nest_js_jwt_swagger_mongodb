import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Accounts')
    .setDescription('The Accounts API description')
    .setVersion('1.0')
    .addTag('accounts')
    .addBearerAuth()
    .build();

  const accountDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/account', app, accountDocument);

  await app.listen(3000);
}
bootstrap();
