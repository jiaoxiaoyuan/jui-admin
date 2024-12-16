import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller'
import { AppService } from './app.service'

// 中间件
import { LoggerMiddleware } from './common/middleware/logger.middleware';

// 友情链接
import { LinksModule } from './modules/links/links.module'
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [LinksModule, UserModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
    configure (consumer: MiddlewareConsumer) {
        // 为 hello 路由添加中间件
        consumer
            .apply(LoggerMiddleware)
            .exclude({ path: 'user', method: RequestMethod.POST })
            .forRoutes('user');
    }
}
