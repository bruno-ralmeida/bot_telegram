import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from './telegraf/telegraf.module';
import { ConfigModule } from '@nestjs/config';
import { IbmWatsonModule } from './ibm-watson/ibm-watson.module';
import { WikipediaModule } from './wikipedia/wikipedia.module';
import { GameRepositoryModule } from './repository/game/gameRepository.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'),
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
