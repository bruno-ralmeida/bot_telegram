import { Module } from '@nestjs/common';
import { ConceptsService } from './concepts.service';

@Module({
  imports: [],
  providers: [ConceptsService],
  exports: [ConceptsService],
})
export class ConceptsModule {}
