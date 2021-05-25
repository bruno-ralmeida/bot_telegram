import { Module } from '@nestjs/common';
import { GameRepositoryService } from './gameRepository.service';

@Module({
  imports: [],
  providers: [GameRepositoryService],
})
export class GameRepositoryModule {}
