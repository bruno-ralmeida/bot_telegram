import { Module, forwardRef } from '@nestjs/common';
import { IbmWatsonService } from './ibm-watson.service';
import { TelegrafModule } from '../telegraf/telegraf.module';
import { WikipediaModule } from '../wikipedia/wikipedia.module';
import { ConceptsModule } from '../repository/concepts/concepts.module';
import { UsageModule } from '../repository/usage/usage.module';

@Module({
  imports: [
    forwardRef(() => TelegrafModule),
    WikipediaModule,
    ConceptsModule,
    UsageModule,
  ],
  providers: [IbmWatsonService],
  exports: [IbmWatsonService],
})
export class IbmWatsonModule {}
