import { Module } from '@nestjs/common';
import { CareerRepositoryService } from './careerRepository.service';

@Module({
  imports: [],
  providers: [CareerRepositoryService],
})
export class CareerRepositoryModule {}
