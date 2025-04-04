import { Module } from '@nestjs/common';
import { ProducerModule } from '../product/producer/producer.module';

@Module({
  imports: [ProducerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
