import { Injectable } from '@nestjs/common';
import { IHistoricoRepo } from '../models/interfaces/historicoRepo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Historico } from '../models/entities/historico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoricoRepo implements IHistoricoRepo {
  constructor(
    @InjectRepository(Historico)
    private readonly historicoRepo: Repository<Historico>,
  ) {}

  async create(param: Historico): Promise<void> {
    await this.historicoRepo.save(param);
  }
}
