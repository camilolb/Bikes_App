import {BaseEntity} from '../../../shared';
import {IBikeEntity, ICartEntity, ICartEntityData} from '../interfaces';

export class Cart extends BaseEntity<ICartEntity> implements ICartEntity {
  private _Bike: IBikeEntity;
  private _Quantity: number;

  constructor(request: ICartEntityData) {
    super();
    this._Bike = request?.bike;
    this._Quantity = request?.quantity;
  }

  get Bike(): IBikeEntity {
    return this._Bike;
  }
  get Quantity(): number {
    return this._Quantity;
  }
}
