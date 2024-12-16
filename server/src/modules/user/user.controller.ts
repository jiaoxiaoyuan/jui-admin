import {     Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    Request,
    // Headers
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


import {
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('用户管理')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiOperation({ summary: '新增', description: '描述XXX' })
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    @ApiOperation({ summary: '查询全部', description: '描述XXX' })
    @ApiQuery({ name: 'page', description: '分页信息' })
    @ApiResponse({ status: 200, description: '获取数据成功' })
    findAll(@Request() req) {
        return this.userService.findAll(req.query);
    }

    @Get(':id')
    @ApiParam({ name: 'id', description: '按id查询', required: true })
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Put(':id')
    @ApiOperation({ summary: '更新', description: '描述XXX' })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除', description: '描述XXX' })
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
