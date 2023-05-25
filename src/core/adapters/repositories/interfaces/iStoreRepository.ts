import {IBikeEntity} from '../../../domain';

export interface IStoreRepository {
  getBikes(): Promise<IBikeEntity[]>;
  getBike(id: string): Promise<IBikeEntity>;
}
