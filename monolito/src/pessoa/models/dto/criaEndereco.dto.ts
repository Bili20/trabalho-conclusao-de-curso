import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CriaEnderecoDTO {
  @IsString()
  bairro: string;

  @IsNumber()
  numero: number;

  @IsString()
  estado: string;

  @IsString()
  cidade: string;

  @IsBoolean()
  principal: boolean;

  @IsNumber()
  @IsOptional()
  id_pessoa: number;

  @IsString()
  @MinLength(8)
  cep: string;
}
