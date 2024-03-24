import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConceptDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  icon: string;
}

export class CreateConceptIconDto {
  @ApiProperty()
  @IsString()
  name: string;
}
