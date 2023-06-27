import { Controller, Get } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';

@Controller('/api')
export class PrometheusController {
  constructor(private readonly prometheusService: PrometheusService) {}

  @Get('/metrics')
  metrics() {
    return this.prometheusService.metrics;
  }
}
