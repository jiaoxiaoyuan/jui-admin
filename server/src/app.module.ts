import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

// 友情链接
import { LinksModule } from './modules/links/links.module'
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [LinksModule, UserModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {

}
