import { Module } from '@nestjs/common';
import { GatewayModule } from '../../frameworks/data-services/gateway/gateway.module';
import { DatabaseModule } from '../../frameworks/data-services/mongo/database.module';
import { CreateUserUseCase } from './create-user.usecase';
import { GetUserByIdUseCase } from './get-users.usecase';
import { UserFactoryService } from './user-factory.service';

@Module({
    imports: [DatabaseModule, GatewayModule],
    providers: [UserFactoryService, CreateUserUseCase, GetUserByIdUseCase],
    exports: [UserFactoryService, CreateUserUseCase, GetUserByIdUseCase],
})
export class UserUseCasesModule {}
