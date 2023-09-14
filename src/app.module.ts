import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SummaryModule } from './summary/summary.module';

@Module({
  imports: [ReportModule, SummaryModule],
  controllers: [AppController],
  providers: [AppService, {provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor}],
})
export class AppModule {}
