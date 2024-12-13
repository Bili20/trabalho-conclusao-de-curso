import { IsArray, IsNumber } from 'class-validator';
import { ProdutosQuantidadeDTO } from './produtosQuantidade.dto';

export class CriaPedidoProdutoDTO {
  @IsNumber()
  id_pedido: number;

  @IsArray()
  produtos: ProdutosQuantidadeDTO[];
}
