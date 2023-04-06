import axios from 'axios';
import { IGenericRepository } from '../../../core/abstracts/base/generic.repository';
import { GetUserDto } from '../../../core/dto/get-user.dto';

export class GatewayRepository<T> implements IGenericRepository<T> {
    constructor() {}
    getAll(): Promise<T[]> {
        throw new Error('Method not implemented.');
    }

    get(id: string): Promise<T> {
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then(response => {
                console.log(response);
                let user: GetUserDto = response.data.data;
                return user;
            })
            .catch(error => {
                console.log(error);
                throw new Error(error);
            });

        return null;
    }
    create(item: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    update(id: string, item: T) {
        throw new Error('Method not implemented.');
    }
}
