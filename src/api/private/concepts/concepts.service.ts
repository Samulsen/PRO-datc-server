import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsService {
  create(): string {
    return 'Concept created';
  }

  get(): string {
    return 'Concept retrieved';
  }
}
