export interface IBikeEntity {
  Id: string;
  Name: string;
  Description: string;
  PriceBase: number;
  PriceTotal: number;
  Image: string;
  Type: string;
  Quantity: number;
  IsAvailable: boolean;
  RentalDate: string;
  RentalDays: number;
}

export interface IBikeEntityData {
  id: string;
  name: string;
  description: string;
  priceBase: number;
  priceTotal: number;
  image: string;
  type: string;
  quantity: number;
  isAvailable: boolean;
  rentalDate: string;
  rentalDays?: number;
}
