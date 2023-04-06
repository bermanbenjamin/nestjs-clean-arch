import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core/abstracts/base/data.service';
import { User } from '../../../core/entities/user.entity';
import { MongoGenericRepository } from './database-generic.repository';
import { UserDocument } from './model/user.model';

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
    users: MongoGenericRepository<User>;

    constructor(
        @InjectModel(User.name)
        private UserRepository: Model<UserDocument>,
    ) {}

    onApplicationBootstrap() {
        this.users = new MongoGenericRepository<User>(this.UserRepository as any);
    }
}
