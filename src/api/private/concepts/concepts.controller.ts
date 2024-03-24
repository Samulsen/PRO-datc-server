import { Controller, Post, Get } from '@nestjs/common';
import { ConceptsService } from 'src/api/private/concepts/concepts.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('concepts')
@Controller('concepts')
export class ConceptsController {
  constructor(private readonly conceptsService: ConceptsService) {}

  @Post()
  create() {
    return this.conceptsService.create();
  }

  @Get()
  get() {
    return this.conceptsService.get();
  }
}
