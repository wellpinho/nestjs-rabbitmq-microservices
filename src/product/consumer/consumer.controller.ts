import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ConsumerOrderDto } from './dto/consumer-order.dto';

@Controller('consumer')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @EventPattern('order_queue')
  handlerOrderQueue(@Payload() consumerOrderDto: ConsumerOrderDto) {
    return this.consumerService.create(consumerOrderDto);
  }
}
