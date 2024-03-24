import { Module } from '@nestjs/common';
import { ConceptsController } from 'src/api/private/concepts/concepts.controller';
import { ConceptsService } from 'src/api/private/concepts/concepts.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Concept,
  ConceptSchema,
  ConceptIcon,
  ConceptIconSchema,
} from 'src/api/private/concepts/models/concepts.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Concept.name, schema: ConceptSchema }],
      'dictDB',
    ),
    MongooseModule.forFeature(
      [{ name: ConceptIcon.name, schema: ConceptIconSchema }],
      'dictDB',
    ),
  ],
  controllers: [ConceptsController],
  providers: [ConceptsService],
})
export class ConceptsModule {}
