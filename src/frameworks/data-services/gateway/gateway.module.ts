import { Module } from '@nestjs/common';
import { IGatewayServices } from '../../../core/abstracts/base/gateway.service';
import { GatewayServicesImpl } from './gateway.service';

@Module({
    providers: [
        {
            provide: IGatewayServices,
            useClass: GatewayServicesImpl,
        },
    ],
    exports: [IGatewayServices],
})
export class GatewayModule {}
