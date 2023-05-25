import React from 'react';
import {Image, Pressable, View} from 'react-native';
import styles from './product-information-item.styles';
import {IBikeEntity} from '../../core/domain';
import {Label} from '../../mobile/mobile-ui';
import SimpleArrow from '../../mobile/mobile-ui/images/SimpleArrow';

export interface PaymentInformationItemProps {
  data?: IBikeEntity;
  onPress: (product?: IBikeEntity) => void;
}

export function ProductInformationItem({
  data,
  onPress,
}: PaymentInformationItemProps) {
  return (
    <Pressable style={styles.item} onPress={() => onPress(data)}>
      <Image
        style={styles.itemImage}
        source={{
          uri: data?.Image,
        }}
      />
      <View style={styles.itemDetails}>
        <Label type={'h4'} fontWeight={'bold'} color={'blue'}>
          {data?.Name}
        </Label>
        <Label
          type={'h4'}
          fontWeight={'500'}
          style={styles.itemDate}
          color={'black'}>
          Price: ${data?.PriceBase}
        </Label>
      </View>
      <Label type={'h4'} fontWeight={'bold'} style={styles.itemPoints}>
        Items: {data?.Quantity}
      </Label>
      <SimpleArrow fill={'#000'} style={styles.arrow} />
    </Pressable>
  );
}

export default ProductInformationItem;