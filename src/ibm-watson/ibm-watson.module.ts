import { Module, forwardRef } from '@nestjs/common';
import { IbmWatsonService } from './ibm-watson.service';
import { TelegrafModule } from '../telegraf/telegraf.module';
import { WikipediaModule } from '../wikipedia/wikipedia.module';

@Module({
  imports: [forwardRef(() => TelegrafModule), WikipediaModule],
  providers: [IbmWatsonService],
  exports: [IbmWatsonService],
})
export class IbmWatsonModule {}
