import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.port || 5000;
  await app.listen(port, () => {
    console.log('Sever console log.');
  });
}
bootstrap();
