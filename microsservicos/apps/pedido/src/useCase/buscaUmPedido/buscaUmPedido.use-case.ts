import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IPedidoRepo } from '../../models/interfaces/pedidoRepo.interface';

@Injectable()
export class BuscaUmPedidoUsecase {
  @Inject('IPedidoRepo')
  private readonly pedidoRepo: IPedidoRepo;

  async execute(id: number) {
    const pedido = await this.pedidoRepo.findOne(id);
    if (!pedido) {
      throw new BadRequestException({ message: 'Pedido não encontrado.' });
    }
    return pedido;
  }
}
