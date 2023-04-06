import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../core/dto/create-user.dto';
import { GetUserDto } from '../../core/dto/get-user.dto';
import { User } from '../../core/entities/user.entity';

@Injectable()
export class UserFactoryService {
    constructor() {}

    createUser(createUserDto: CreateUserDto) {
        try {
            const newUser = new User();
            newUser.email = createUserDto.email;
            newUser.first_name = createUserDto.first_name;
            newUser.last_name = createUserDto.last_name;
            newUser.avatar = createUserDto.avatar;
            return newUser;
        } catch (error) {
            throw new Error(error);
        }
    }

    getUser(getUSerDto: GetUserDto) {
        const newUser = new User();
        newUser.id = getUSerDto.id;
        newUser.email = getUSerDto.email;
        newUser.first_name = getUSerDto.first_name;
        newUser.last_name = getUSerDto.last_name;
        newUser.avatar = getUSerDto.avatar;
        return newUser;
    }

    getUsers(getUsersDto: GetUserDto[]) {
        const users: User[] = [];
        getUsersDto.forEach(user => {
            const newUser = new User();
            newUser.id = user.id;
            newUser.email = user.email;
            newUser.first_name = user.first_name;
            newUser.last_name = user.last_name;
            newUser.avatar = user.avatar;
            users.push(newUser);
        });
        return users;
    }
}
