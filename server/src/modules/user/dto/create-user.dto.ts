import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: '用户名',
        example: 'zhangsan'
    })
    @IsNotEmpty({ message: '用户名不能为空' })
    @IsString()
    username: string;

    @ApiProperty({
        description: '密码',
        example: '123456',
        minLength: 6
    })
    @IsNotEmpty({ message: '密码不能为空' })
    @IsString()
    @MinLength(6, { message: '密码长度不能少于6位' })
    password: string;

    @ApiProperty({
        description: '邮箱',
        example: 'zhangsan@example.com'
    })
    @IsEmail({}, { message: '请输入正确的邮箱格式' })
    @IsNotEmpty({ message: '邮箱不能为空' })
    email: string;

    @ApiProperty({
        description: '昵称',
        required: false,
        example: '张三'
    })
    @IsString()
    @IsOptional()
    nickname?: string;

    @ApiProperty({
        description: '头像URL',
        required: false,
        example: 'https://example.com/avatar.jpg'
    })
    @IsString()
    @IsOptional()
    avatar?: string;

    @ApiProperty({
        description: '手机号',
        required: false,
        example: '13800138000'
    })
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiProperty({
        description: '用户状态',
        default: 1,
        enum: [0, 1],
        example: 1
    })
    @IsOptional()
    status?: number;
}
