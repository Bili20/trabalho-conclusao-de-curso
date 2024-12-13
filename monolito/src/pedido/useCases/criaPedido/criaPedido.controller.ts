import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CriaPedidoUseCase } from './criaPedido.use-case';
import { CriaPedidoDto } from 'src/pedido/models/dto/criaPedido.dto';

@Controller('pedido')
export class CriaPedidoController {
  @Inject(CriaPedidoUseCase)
  private readonly criaPedidoUseCase: CriaPedidoUseCase;

  @Post()
  async criaPedido(@Body() param: CriaPedidoDto) {
    await this.criaPedidoUseCase.execute(param);
  }
}
