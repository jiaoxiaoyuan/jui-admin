import { ApiProperty } from '@nestjs/swagger';
export class CreateLinkDto {
    @ApiProperty({ description: '姓名', example: '小满' })
    name: string;
    @ApiProperty({ description: '年龄' })
    age: number;
}
