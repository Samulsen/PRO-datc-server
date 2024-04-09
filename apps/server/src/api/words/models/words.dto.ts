import { IsString, IsEnum, IsOptional } from 'class-validator';
import { EWordType } from '@server/api/words/models/words.types';
import { ApiProperty } from '@nestjs/swagger';

class WordDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString({ each: true })
  concepts?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString({ each: true })
  combinators?: string[];

  @IsOptional()
  @IsString({ each: true })
  variants?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString({ each: true })
  synonyms?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString({ each: true })
  antagonists?: string[];
}

export class UpdateWordDto extends WordDto {
  @ApiProperty({ enum: EWordType, required: false })
  @IsOptional()
  @IsEnum(EWordType)
  type?: EWordType;
}

export class CreateWordDto extends WordDto {
  @ApiProperty()
  @IsString()
  value: string;

  @ApiProperty({ enum: EWordType })
  @IsEnum(EWordType)
  type: EWordType;
}
