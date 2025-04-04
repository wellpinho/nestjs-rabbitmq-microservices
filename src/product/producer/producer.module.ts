import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProducerService } from './prducer.service';
import { RabbitMQController } from './producer.controller';

@Module({
  imports: [
    // Configuração do producer (fila de envio)
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'], // URL do RabbitMQ
          queue: 'order_queue', // Nome da fila de envio
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [ProducerService],
  // TODO: para usar este modulo em outro lugar é preciso exportar module e service
  exports: [ProducerService, ProducerModule],
  controllers: [RabbitMQController],
})
export class ProducerModule {}
