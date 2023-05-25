import {BaseEntity} from '../../../shared';
import {IBikeEntity, IBikeEntityData} from '../interfaces';

export class Bike extends BaseEntity<IBikeEntity> implements IBikeEntity {
  private _Id: string;
  private _Name: string;
  private _Description: string;
  private _PriceBase: number;
  private _PriceTotal: number;
  private _Image: string;
  private _Type: string;
  private _Quantity: number;
  private _IsAvailable: boolean;
  private _RentalDate: string;
  private _RentalDays: number;

  constructor(request: IBikeEntityData) {
    super();
    this._Id = request.id.toString();
    this._Name = request.name;
    this._Description = request.description;
    this._PriceBase = request.priceBase;
    this._PriceTotal = request.priceTotal;
    this._Image = request.image;
    this._Type = request.type;
    this._Quantity = request.quantity;
    this._IsAvailable = request.isAvailable;
    this._RentalDate = request.rentalDate;
    this._RentalDays = request.rentalDays || 1;
  }

  get Id(): string {
    return this._Id;
  }

  get Name(): string {
    return this._Name;
  }

  get Description(): string {
    return this._Description;
  }

  get PriceBase(): number {
    return this._PriceBase;
  }

  get PriceTotal(): number {
    return this._PriceTotal;
  }

  get Image(): string {
    return this._Image;
  }

  get Type(): string {
    return this._Type;
  }

  get Quantity(): number {
    return this._Quantity;
  }

  get IsAvailable(): boolean {
    return this._IsAvailable;
  }

  get RentalDate(): string {
    return this._RentalDate;
  }
  get RentalDays(): number {
    return this._RentalDays;
  }
  set RentalDays(value: number) {
    this._RentalDays = value;
  }
}
