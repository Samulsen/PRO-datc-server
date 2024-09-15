import {
  Controller,
  Post,
  Get,
  Body,
  BadRequestException,
} from "@nestjs/common";
import { ConceptsService } from './concepts.service';
import { ApiTags } from "@nestjs/swagger";
import { CreateConceptDto } from './models/concepts.dto';

@ApiTags("concepts")
@Controller("concepts")
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
