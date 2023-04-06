import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CreateUserResponseDto } from '../core/dto/create-user-response.dto';
import { CreateUserDto } from '../core/dto/create-user.dto';
import { CreateUserUseCase } from '../use-cases/user/create-user.usecase';
import { GetUserByIdUseCase } from '../use-cases/user/get-users.usecase';
import { UserFactoryService } from '../use-cases/user/user-factory.service';

@Controller('user')
export class UserController {
    constructor(private createUserUseCase: CreateUserUseCase, private getUserByIdUseCase: GetUserByIdUseCase, private userFactoryService: UserFactoryService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto, @Res() response): Promise<Response> {
        try {
            const user = this.userFactoryService.createUser(createUserDto);
            const createdUser = await this.createUserUseCase.execute(user);

            return response.status(201).json(createdUser);
        } catch (error) {
            return response.status(400).json(error.message).end();
        }
    }

    @Get('/:id')
    async getUserById(@Param('id') id: string): Promise<CreateUserResponseDto> {
        let response = new CreateUserResponseDto();

        try {
            const user = await this.getUserByIdUseCase.execute(id);

            response.success = true;
            response.createdUser = user;

            return response;
        } catch (error) {
            response.success = false;
            response.createdUser = null;

            return response;
        }
    }
}
