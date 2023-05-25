import React from 'react';
import {ProductEditPageComponent} from './ProductEditPageComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {CartStoragetype, useCart} from '../../../core/frameworks/jotai';
import {IBikeEntity} from '../../../core/domain';

type NavigationScreenProps = NativeStackScreenProps<
  PrivateStackParamList,
  'ProductEdit'
>;

type Props = NavigationScreenProps;

export function ProductEditPagePresenter({route, navigation}: Props) {
  const [cartInformation, setCartInformation] = useCart();
  const {products} = cartInformation as CartStoragetype;
  const {bike} = route.params;

  const onHandleSubmit = (product?: IBikeEntity) => {
    setCartInformation({products: [...products, product]});
    navigation.navigate('TabBar');
  };

  return (
    <ProductEditPageComponent onHandleSubmit={onHandleSubmit} product={bike} />
  );
}
