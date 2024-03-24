import { Controller, Post, Get } from '@nestjs/common';
import { ConceptsService } from 'src/api/private/concepts/concepts.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('concepts')
@Controller('concepts')
export class ConceptsController {
  constructor(private readonly conceptsService: ConceptsService) {}

  @Post()
  async create() {
    return this.conceptsService.createConcept();
  }

  @Get()
  async get() {
    return this.conceptsService.getAllConcepts();
  }
}
