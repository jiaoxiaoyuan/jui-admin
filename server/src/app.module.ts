import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

// import { StatusMonitorModule } from 'nest-status-monitor';
// import statusMonitorConfig from './config/statusMonitor';

import { AppController } from './app.controller'
import { AppService } from './app.service'

// 中间件
import { LoggerMiddleware } from './common/middleware/logger.middleware';

// 友情链接
import { LinksModule } from './modules/links/links.module'
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        // 状态监控
        // StatusMonitorModule.setUp(statusMonitorConfig),
        LinksModule,
        UserModule
    ],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
    configure (consumer: MiddlewareConsumer) {

        // 为 user 路由添加中间件
        consumer
            .apply(LoggerMiddleware)
            .exclude({ path: 'user', method: RequestMethod.POST })
            .forRoutes('user');
    }
}
