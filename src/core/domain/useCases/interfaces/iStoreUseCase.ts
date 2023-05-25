import {IBikeEntity} from '../../interfaces';

export interface IStoreUseCase {
  getBikes(): Promise<IBikeEntity[]>;
  getBike(id: string): Promise<IBikeEntity>;
}
