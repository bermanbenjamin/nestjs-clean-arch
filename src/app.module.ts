import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './controllers/user.controller';
import { GatewayModule } from './frameworks/data-services/gateway/gateway.module';
import { DatabaseModule } from './frameworks/data-services/mongo/database.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        GatewayModule,
        DatabaseModule,
        UserUseCasesModule,
    ],
    controllers: [UserController],
})
export class AppModule {}
