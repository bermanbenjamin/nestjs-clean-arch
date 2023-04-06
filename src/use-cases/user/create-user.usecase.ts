import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts/base/data.service';
import { User } from '../../core/entities/user.entity';

@Injectable()
export class CreateUserUseCase {
    constructor(private dataServices: IDataServices) {}

    async execute(user: User): Promise<User> {
        try {
            const createdUser = await this.dataServices.users.create(user);
            return createdUser;
        } catch (error) {
            throw new Error(error);
        }
    }
}
