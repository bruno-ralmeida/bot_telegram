import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from './telegraf/telegraf.module';
import { ConfigModule } from '@nestjs/config';
import { IbmWatsonModule } from './ibm-watson/ibm-watson.module';
import { WikipediaModule } from './wikipedia/wikipedia.module';
import { GameRepositoryModule } from './repository/game/gameRepository.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TelegrafModule,
    IbmWatsonModule,
    WikipediaModule,
    GameRepositoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
