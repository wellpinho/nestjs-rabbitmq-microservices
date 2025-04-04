import { Controller, Post, Body } from '@nestjs/common';
import { ProducerService } from './prducer.service';
import { ProduceDto } from './dto/producer.dto';

@Controller()
export class RabbitMQController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('send-to-producer')
  sendMessageToProducer(@Body() order: ProduceDto) {
    this.producerService.sendMessageToProducerQueue(order);

    return { message: 'Ordem de compra criada na fila do RabbitMQ' };
  }
}
