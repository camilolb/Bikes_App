import React from 'react';
import styles from './SignUpEmailPage.styles';
import {Image, ScrollView, View} from 'react-native';
import {Images} from '../../mobile-ui/assets/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFormikContext} from 'formik';
import {SignUpEmailFormProps} from './SignUpEmailPagePresenter';
import {Button, Label, TextField} from '../../mobile-ui';

export function SignUpEmailPageComponent() {
  const {values, handleChange, handleSubmit, handleBlur, errors} =
    useFormikContext<SignUpEmailFormProps>();

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView edges={['top']} style={styles.containerContent}>
          <View style={styles.logoContainer}>
            <Image source={Images.logoNegro} style={styles.logo} />
          </View>
          <View style={styles.descriptionContainer}>
            <Label type={'h2'} fontWeight={'600'} color={'white'}>
              Registration information
            </Label>
          </View>
          <TextField
            textContentType={'none'}
            autoCapitalize={'none'}
            autoComplete={'off'}
            hasError={!!errors.document}
            error={errors.document}
            placeholder={'Document'}
            containerStyle={styles.textInput}
            onChangeText={handleChange('document')}
            onBlur={handleBlur('document')}
            value={values.document}
          />
          <TextField
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoComplete={'email'}
            hasError={!!errors.email}
            error={errors.email}
            placeholder={'Email'}
            containerStyle={styles.textInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <TextField
            textContentType={'telephoneNumber'}
            keyboardType={'phone-pad'}
            autoCapitalize={'none'}
            autoComplete={'tel'}
            hasError={!!errors.phone}
            error={errors.phone}
            placeholder={'Phone'}
            containerStyle={styles.textInput}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
          />
          <TextField
            textContentType={'password'}
            autoComplete={'password'}
            autoCapitalize={'none'}
            hasError={!!errors.password}
            error={errors.password}
            isPassword
            placeholder={'Password'}
            containerStyle={styles.textInput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <TextField
            textContentType={'password'}
            autoComplete={'password'}
            autoCapitalize={'none'}
            hasError={!!errors.confirmPassword}
            error={errors.confirmPassword}
            isPassword
            placeholder={'Confirm Password'}
            containerStyle={styles.textInput}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
          />
          <Button label={'REGISTER'} onPress={handleSubmit} />
        </SafeAreaView>
      </View>
    </>
  );
}
