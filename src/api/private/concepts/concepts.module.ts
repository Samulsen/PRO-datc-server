import { Module } from '@nestjs/common';
import { ConceptsController } from 'src/api/private/concepts/concepts.controller';
import { ConceptsService } from 'src/api/private/concepts/concepts.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ConceptsController],
  providers: [ConceptsService],
})
export class ConceptsModule {}
