import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IGatewayServices } from '../../../core/abstracts/base/gateway.service';
import { IGenericRepository } from '../../../core/abstracts/base/generic.repository';
import { User } from '../../../core/entities/user.entity';
import { GatewayRepository } from './gateway.repository';

@Injectable()
export class GatewayServicesImpl implements IGatewayServices, OnApplicationBootstrap {
    users: IGenericRepository<User>;

    constructor() {}
    onApplicationBootstrap() {
        this.users = new GatewayRepository<User>();
    }
}
