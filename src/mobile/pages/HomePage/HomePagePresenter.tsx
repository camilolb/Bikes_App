import React from 'react';
import {useLoading, useBike} from '../../../core/hooks';
import {HomePageComponent} from './HomePageComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {useFocusEffect} from '@react-navigation/native';

type NavigationScreenProps = NativeStackScreenProps<PrivateStackParamList>;
type Props = NavigationScreenProps;

export function HomePagePresenter({navigation}: Props) {
  const {data, isLoading} = useBike();
  const {setLoading} = useLoading();

  const onHandleEdit = (bike?: any) => {
    navigation.navigate('ProductEdit', {
      bike,
    });
  };

  const handleGoToProfile = () => {
    navigation.navigate('ProfilePage');
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoading(isLoading);
    }, [isLoading, setLoading]),
  );

  return (
    <HomePageComponent
      bikeList={data}
      onHandleEdit={onHandleEdit}
      handleGoToProfile={handleGoToProfile}
    />
  );
}
