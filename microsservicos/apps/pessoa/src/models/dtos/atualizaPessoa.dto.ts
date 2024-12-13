import { IsEmail, IsObject, IsOptional, IsString } from 'class-validator';
import { CriaPessoaDto } from './criaPessoa.dto';
import { CriaEnderecoDto } from './criaEndereco.dto';

export class AtualizaPessoaDTO extends CriaPessoaDto {
  @IsString()
  @IsOptional()
  nome: string;

  @IsString()
  @IsOptional()
  documento: string;

  @IsString()
  @IsOptional()
  data_nacimento: Date;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  telefone: string;

  @IsString()
  @IsOptional()
  sexo: string;

  @IsObject()
  @IsOptional()
  endereco: CriaEnderecoDto;
}
