import { Inject, Injectable } from '@nestjs/common';
import { IPedidoRepo } from '../../models/interfaces/pedidoRepo.interface';

@Injectable()
export class BuscaPedidosUseCase {
  @Inject('IPedidoRepo')
  private readonly pedidoRepo: IPedidoRepo;

  async execute() {
    return await this.pedidoRepo.find();
  }
}
