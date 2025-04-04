import { Injectable } from '@nestjs/common';
import { ConsumerOrderDto } from './dto/consumer-order.dto';
import { EventPattern } from '@nestjs/microservices';

@Injectable()
export class ConsumerService {
  @EventPattern('order_queue') // Nome da fila de consumo
  create(consumerOrderDto: ConsumerOrderDto) {
    console.log('Mensagem recebida da fila:', consumerOrderDto);
  }
}
