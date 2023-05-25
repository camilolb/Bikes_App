import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Button, HeaderProduct, Label} from '../../mobile-ui';
import styles from './ProductEditPage.styles';
import {IBikeEntity} from '../../../core/domain';

interface ProductEditProps {
  onHandleSubmit: (product?: IBikeEntity) => void;
  product?: IBikeEntity;
}
type Props = ProductEditProps;

export function ProductEditPageComponent({onHandleSubmit, product}: Props) {
  return (
    <>
      <View style={styles.container}>
        <HeaderProduct title={product?.Name} />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <>
            <View style={styles.imageContainer}>
              <Image source={{uri: product?.Image}} style={styles.image} />
            </View>
            <View style={styles.productDescriptionContainer}>
              <Label type={'h4'} fontWeight={'bold'} color={'silver'}>
                {'Extra information:'}
              </Label>
              <Label
                type={'h4'}
                fontWeight={'bold'}
                color={'black'}
                style={styles.titleProductDescription}>
                {product?.Description}
              </Label>
              <Label type={'h4'} fontWeight={'bold'} color={'silver'}>
                {'Bike price'}
              </Label>
              <Label
                fontWeight={'bold'}
                style={styles.descriptionPoints}
                type={'h1'}>
                ${product?.PriceBase} USD
              </Label>
            </View>
          </>
        </ScrollView>
        <View style={styles.logoutButtonContainer}>
          <Button
            label={'Rent now'}
            type={'black'}
            containerStyles={styles.buttonLogout}
            onPress={() => onHandleSubmit(product)}
          />
        </View>
      </View>
    </>
  );
}
