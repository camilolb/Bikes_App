import React from 'react';
import {CartPageComponent} from './CartPageComponent';
import {CartStoragetype, useCart} from '../../../core/frameworks/jotai';
import {IBikeEntity} from '../../../core/domain';
import {calculateCartTotal} from '../../../shared';

export function CartPagePresenter() {
  const [cartInformation] = useCart();
  const {products} = cartInformation as CartStoragetype;

  const onHandleSubmit = () => {
    console.log('TODO');
  };
  const onHandleEdit = (product?: IBikeEntity) => {
    console.log('product', product);
  };
  return (
    <CartPageComponent
      onHandleSubmit={onHandleSubmit}
      productList={products || []}
      onHandleEdit={onHandleEdit}
      totalMountCart={calculateCartTotal(products)}
    />
  );
}
