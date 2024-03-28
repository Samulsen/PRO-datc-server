import { Module } from '@nestjs/common';
import { ConceptsController } from 'src/api/concepts/concepts.controller';
import { ConceptsService } from 'src/api/concepts/concepts.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Concept,
  ConceptSchema,
} from 'src/api/concepts/models/concepts.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Concept.name, schema: ConceptSchema }],
      'dictDB',
    ),
  ],
  controllers: [ConceptsController],
  providers: [ConceptsService],
})
export class ConceptsModule {}
