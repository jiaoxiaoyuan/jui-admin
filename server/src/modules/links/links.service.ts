import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Injectable()
export class LinksService {
    create(createLinkDto: CreateLinkDto) {
        return {
            code: 200,
            message: 'success',
            data: { ...createLinkDto },
        };
    }

    findAll(res?: any) {
        return {
            code: 200,
            message: 'success',
            data: [
                { name: 'link1', age: 20 },
                { name: 'link2', age: 30 },
            ],
            total: 2,
            ...res,
        };
    }

    findOne(id: number) {
        return {
            code: 200,
            message: 'success',
            data: { name: `link${id}`, age: id * 10 },
            total: 2,
        };
    }

    update(id: number, updateLinkDto: UpdateLinkDto) {
        return {
            code: 200,
            message: 'success',
            data: { ...updateLinkDto, id: id },
        };
    }

    remove(id: number) {
        return {
            code: 200,
            message: 'success',
            data: { id },
        };
    }
}
