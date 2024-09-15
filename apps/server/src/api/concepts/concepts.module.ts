import { Module } from "@nestjs/common";
import { ConceptsController } from './concepts.controller';
import { ConceptsService } from './concepts.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Concept, ConceptSchema } from './models/concepts.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Concept.name, schema: ConceptSchema }],
      "dictDB"
    ),
  ],
  controllers: [ConceptsController],
  providers: [ConceptsService],
})
export class ConceptsModule {}
