import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

// 友情链接
import { LinksModule } from './modules/links/links.module'

@Module({
	imports: [LinksModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
