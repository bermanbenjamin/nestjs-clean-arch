import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIPrefix } from './constants/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix(APIPrefix.Version);
    const port = parseInt(process.env.PORT) || 3000;
    await app.listen(port).then(() => {
        console.log(`Server is running on port ${port}`);
    });
}
bootstrap();
