import {
  Controller,
  Post,
  Get,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { ConceptsService } from 'src/api/private/concepts/concepts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateConceptDto } from 'src/api/private/concepts/models/concepts.dto';

@ApiTags('concepts')
@Controller('concepts')
export class ConceptsController {
  constructor(private readonly conceptsService: ConceptsService) {}

  @Post()
  async create(@Body() conceptDto: CreateConceptDto) {
    try {
      return await this.conceptsService.createConcept(conceptDto);
    } catch (error) {
      throw new BadRequestException({ message: error.message });
    }
  }

  @Get()
  async getAll() {
    return await this.conceptsService.getAllConcepts();
  }
}
