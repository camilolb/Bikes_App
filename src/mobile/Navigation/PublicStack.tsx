import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SignInEmailPagePresenter,
  SignUpEmailPagePresenter,
} from '../../mobile/pages';

export type PublicStackParamList = {
  Welcome: undefined;
  SignInEmail: undefined;
  SignUpEmail: undefined;
};
const Stack = createStackNavigator<PublicStackParamList>();
function PublicStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignInEmail">
      <Stack.Screen name="SignInEmail" component={SignInEmailPagePresenter} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmailPagePresenter} />
    </Stack.Navigator>
  );
}

export default PublicStack;
