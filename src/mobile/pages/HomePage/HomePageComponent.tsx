import React from 'react';
import {Label} from '../../mobile-ui';
import styles from './HomePage.styles';
import {IBikeEntity} from '../../../core/domain';
import {ProductInformationItem} from '../../../shared';
import {View, FlatList, Pressable} from 'react-native';

type Props = {
  bikeList?: IBikeEntity[];
  onHandleEdit: (product?: any) => void;
  handleGoToProfile: () => void;
};

export function HomePageComponent({
  bikeList,
  onHandleEdit,
  handleGoToProfile,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Label
          color={'black'}
          fontWeight={'bold'}
          type={'h1'}
          style={styles.centerAlight}>
          Bienvenido de vuelta!
        </Label>
        <Pressable onPress={handleGoToProfile}>
          <Label type={'h2'} fontWeight={'300'} style={styles.headerText}>
            John Doe
          </Label>
        </Pressable>
      </View>
      <View style={styles.productsContainer}>
        <Label type={'h4'} fontWeight={'bold'} color={'silver'}>
          BIKES RENT
        </Label>
        <View style={styles.productListContainer}>
          <FlatList
            contentContainerStyle={styles.productScrollView}
            data={bikeList}
            keyExtractor={item => item.Id}
            renderItem={({item}) => (
              <ProductInformationItem data={item} onPress={onHandleEdit} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
