import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusModule } from './prometheus/prometheus.module';

@Module({
  imports: [PrometheusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
