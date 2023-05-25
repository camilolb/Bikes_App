import React from 'react';
import {FlatList, View} from 'react-native';
import {Header, Label} from '../../mobile-ui';
import styles from './CartPage.styles';
import {IBikeEntity} from '../../../core/domain';
import {ProducCartItem} from '../../../shared';
type Props = {
  onHandleEdit: (product?: IBikeEntity) => void;
  productList: IBikeEntity[];
  onHandleSubmit: () => void;
  totalMountCart: number;
};

export function CartPageComponent({
  productList,
  onHandleEdit,
  totalMountCart,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Header
          options={{
            title: 'Rent Products',
            blackHeader: true,
          }}
        />
      </View>
      <View style={styles.containerContent}>
        <FlatList
          contentContainerStyle={styles.containerContent}
          data={productList || []}
          renderItem={({item}) => (
            <ProducCartItem data={item} onPress={onHandleEdit} />
          )}
        />
      </View>
      <View style={styles.containerMount}>
        <Label fontWeight={'bold'} color={'white'} type={'h2'}>
          Total: ${totalMountCart} USD
        </Label>
      </View>
    </View>
  );
}
