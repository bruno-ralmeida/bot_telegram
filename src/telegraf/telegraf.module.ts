import { Module, forwardRef } from '@nestjs/common';
import { TelegrafService } from './telegraf.service';
import { IbmWatsonModule } from '../ibm-watson/ibm-watson.module';

@Module({
  imports: [forwardRef(() => IbmWatsonModule)],
  providers: [TelegrafService],
  exports: [TelegrafService],
})
export class TelegrafModule {}
