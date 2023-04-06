import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../core/abstracts/base/data.service';
import { User } from '../../../core/entities/user.entity';
import { MongoDataServices } from './database.service';
import { UserSchema } from './model/user.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forRoot('mongodb://admin:admin@127.0.0.1:27017/payever?authSource=admin&directConnection=true'),
    ],
    providers: [
        {
            provide: IDataServices,
            useClass: MongoDataServices,
        },
    ],
    exports: [IDataServices],
})
export class DatabaseModule {}
