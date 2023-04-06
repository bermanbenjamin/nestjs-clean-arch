import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { model } from 'mongoose';

export type UserDocument = UserModel & Document;

@Schema()
export class UserModel {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    first_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true })
    avatar: string;
}
export const UserSchema = SchemaFactory.createForClass(UserModel);
export default model<UserModel>('User', UserSchema);
