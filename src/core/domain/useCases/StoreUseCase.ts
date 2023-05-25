import {IStoreRepository} from '../../adapters/repositories';
import {IBikeEntity} from '../interfaces';
import {IStoreUseCase} from './interfaces';

export class StoreUseCase implements IStoreUseCase {
  constructor(readonly storeRepo: IStoreRepository) {}

  async getBikes(): Promise<IBikeEntity[]> {
    return await this.storeRepo.getBikes();
  }

  async getBike(id: string): Promise<IBikeEntity> {
    return await this.storeRepo.getBike(id);
  }
}
