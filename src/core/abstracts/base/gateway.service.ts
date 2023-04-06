import { User } from '../../entities/user.entity';
import { IGenericRepository } from './generic.repository';

export abstract class IGatewayServices {
    abstract users: IGenericRepository<User>;
}
