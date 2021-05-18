import { Module } from '@nestjs/common';
import { TelegrafModule } from 'src/telegraf/telegraf.module';
import { GameService } from './game.service';

@Module({
  imports: [TelegrafModule],
  providers: [GameService],
  exports: [GameService],
})
export class GameModule {}
