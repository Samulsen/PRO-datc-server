import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concept } from 'src/api/private/concepts/models/concepts.schema';
import { CreateConceptDto } from 'src/api/private/concepts/models/concepts.dto';

@Injectable()
export class ConceptsService {
  constructor(
    @InjectModel(Concept.name, 'dictDB')
    private conceptModel: Model<Concept>,
  ) {}

  async createConcept() {
    return 'Concept created';
  }

  async getAllConcepts() {
    return 'Concept retrieved';
  }
}
