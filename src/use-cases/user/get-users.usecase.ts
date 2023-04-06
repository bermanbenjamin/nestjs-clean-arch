import { IGatewayServices } from '../../core/abstracts/base/gateway.service';
import { User } from '../../core/entities/user.entity';

export class GetUserByIdUseCase {
    constructor(private userGatewayServices: IGatewayServices) {}

    async execute(id: string): Promise<User> {
        try {
            console.log('GetUserByIdUseCase.execute() error: ', this.userGatewayServices);
            const user = await this.userGatewayServices.users.get(id);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}
