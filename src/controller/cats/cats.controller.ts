//---------IMPORTS------------\

import { Body, Controller, Get, Post } from '@nestjs/common';

//---------MAIN------------\
@Controller('cats')
export class CatsController {
  @Get()
  findAllCats(): { message: string } {
    return { message: 'This action returns all cats' };
  }
  @Post()
  createCat(@Body() body: { name: string }): string {
    return `This action adds a new cat ${body.name}`;
  }
}
