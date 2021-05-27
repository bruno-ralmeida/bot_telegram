import { Module } from '@nestjs/common';
import { LinksRepositoryService } from './linksRepository.service';

@Module({
  imports: [],
  providers: [LinksRepositoryService],
})
export class LinksRepositoryModule {}
