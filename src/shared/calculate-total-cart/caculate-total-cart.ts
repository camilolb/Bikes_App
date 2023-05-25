import {IBikeEntity} from '../../core/domain';

export function calculateCartTotal(productList: IBikeEntity[]): number {
  let total = 0;

  productList.forEach(item => {
    total += item.PriceBase;
  });

  return total;
}
