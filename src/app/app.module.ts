import { Module } from '@nestjs/common';
import { ProducerModule } from '../product/producer/producer.module';
import { ConsumerModule } from 'src/product/consumer/consumer.module';

@Module({
  imports: [ProducerModule, ConsumerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
