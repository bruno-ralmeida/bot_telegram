import { Module } from '@nestjs/common';
import { TelegrafModule } from 'src/telegraf/telegraf.module';
import { CareerService } from './career.service';

@Module({
  imports: [TelegrafModule],
  providers: [CareerService],
  exports: [CareerService],
})
export class GameModule {}
