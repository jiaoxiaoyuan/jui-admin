import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
    async transform (value: string, metadata: ArgumentMetadata) {
        const val = parseInt(value, 10);

        console.log('metadata', metadata)
        if (isNaN(val)) {
            throw new BadRequestException('Validation failed');
        }
        return val;
    }
}
