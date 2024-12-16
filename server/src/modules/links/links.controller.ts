import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    Request,
    Headers,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@Controller('links')
@ApiBearerAuth()
@ApiTags('有情链接')
export class LinksController {
    constructor(private readonly linksService: LinksService) {}

    @Post()
    @ApiOperation({ summary: '新增', description: '描述XXX' })
    create(@Body() createLinkDto: CreateLinkDto) {
        return this.linksService.create(createLinkDto);
    }

    @Get()
    @ApiOperation({ summary: '查询全部', description: '描述XXX' })
    @ApiQuery({ name: 'page', description: '分页信息' })
    @ApiResponse({ status: 200, description: '获取数据成功' })
    findAll(@Request() req) {
        return this.linksService.findAll(req.query);
    }

    @Get(':id')
    @ApiParam({ name: 'id', description: '按id查询', required: true })
    findOne(@Param('id') id: string, @Headers() headers) {
        console.log(headers);
        return this.linksService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
        return this.linksService.update(+id, updateLinkDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.linksService.remove(+id);
    }
}
