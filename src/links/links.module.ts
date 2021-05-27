import { Module } from '@nestjs/common';
import { TelegrafModule } from 'src/telegraf/telegraf.module';
import { LinksService } from './links.service';

@Module({
  imports: [TelegrafModule],
  providers: [LinksService],
  exports: [LinksService],
})
export class GameModule {}
