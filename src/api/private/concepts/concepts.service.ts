import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concept } from 'src/api/private/concepts/models/concepts.schema';
import { CreateConceptDto } from 'src/api/private/concepts/models/concepts.dto';
import {
  stringUtilExistsMessage as existMessage,
  stringUtilWasCreatedMessage as wasCreatedMessage,
} from 'src/utils/strings.utils';

@Injectable()
export class ConceptsService {
  constructor(
    @InjectModel(Concept.name, 'dictDB')
    private conceptModel: Model<Concept>,
  ) {}

  async getConcept(concept: string) {
    const conceptData = await this.conceptModel.findOne({ name: concept });
    return conceptData ? conceptData : false;
  }

  async createConcept(newConcept: CreateConceptDto) {
    if (await this.getConcept(newConcept.name)) {
      const concept = new this.conceptModel(newConcept);
      await concept.save();
      return { message: wasCreatedMessage('Concept', newConcept.name) };
    } else {
      throw new Error(existMessage('Concept', newConcept.name));
    }
  }

  async getAllConcepts() {
    return (await this.conceptModel.find()).map((concept) => {
      return { name: concept.name, icon: concept.icon };
    });
  }
}
