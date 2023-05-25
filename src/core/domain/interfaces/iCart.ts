import {IBikeEntity} from './iBike';

export interface ICartEntity {
  Bike: IBikeEntity;
  Quantity: number;
}
export interface ICartEntityData {
  bike: IBikeEntity;
  quantity: number;
}
