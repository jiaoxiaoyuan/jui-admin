import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';




@Injectable()
export class UserService {
    create (createUserDto: CreateUserDto) {
        return {
            code: 200,
            message: 'success',
            data: { ...createUserDto },
        };
    }

    findAll (res?: any) {
        return {
            code: 200,
            message: 'success',
            data: [
                { name: 'user1', age: 20 },
                { name: 'user2', age: 30 },
            ],
            total: 2,
            ...res
        };
    }

    findOne (id: number) {
        return {
            code: 200,
            message: 'success',
            data: { name: `user${id}`, age: id * 10 },
            total: 2,
        };
    }

    update (id: number, updateUserDto: UpdateUserDto) {
        return {
            code: 200,
            message: 'success',
            data: { ...updateUserDto },
        };
    }

    remove (id: number) {
        return {
            code: 200,
            message: 'success',
            data: { id },
        };
    }
}
