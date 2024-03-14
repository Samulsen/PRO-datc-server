import { IsString, IsEnum, IsOptional } from 'class-validator';
import { EWordType } from 'src/api/private/words/words.types';

class WordDto {
  @IsOptional()
  @IsString({ each: true })
  concepts?: string[];

  @IsOptional()
  @IsString({ each: true })
  variants?: string[];

  @IsOptional()
  @IsString({ each: true })
  synonyms?: string[];

  @IsOptional()
  @IsString({ each: true })
  antagonists?: string[];
}

export class UpdateWordDto extends WordDto {
  @IsOptional()
  @IsEnum(EWordType)
  type?: EWordType;
}

export class CreateWordDto extends WordDto {
  @IsString()
  value: string;

  @IsEnum(EWordType)
  type: EWordType;
}
