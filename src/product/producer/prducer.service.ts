import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProduceDto } from './dto/producer.dto';

@Injectable()
export class ProducerService implements OnModuleInit {
  constructor(
    @Inject('ORDER_SERVICE')
    private readonly producerClient: ClientProxy,
  ) {}

  async onModuleInit() {
    await this.producerClient.connect();
  }

  // Producer: Envia uma mensagem para a fila de envio
  sendMessageToProducerQueue(data: ProduceDto) {
    // TODO: o emit deve estar presente
    return this.producerClient.emit('order_queue', data);
  }
}
