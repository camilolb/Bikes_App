import {IBikeEntity, IBikeEntityData, Bike} from '../../domain';
import {IHttp} from '../infrastructures/interfaces';
import {IStoreRepository} from './interfaces';
import {API_URL} from '@env';

export class StoreRepository implements IStoreRepository {
  constructor(readonly http: IHttp) {}

  getBikes(): Promise<IBikeEntity[]> {
    return this.http
      .request<IBikeEntityData[]>({
        method: 'get',
        headers: {},
        url: `${API_URL}/bikes`,
      })
      .then(res => res)
      .then(res => {
        return res.map(item => new Bike(item));
      });
  }

  getBike(id: string): Promise<IBikeEntity> {
    return this.http
      .request<IBikeEntityData>({
        method: 'get',
        url: `${API_URL}/bikes/${id}`,
      })
      .then(res => new Bike(res));
  }
}
