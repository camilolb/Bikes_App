import React from 'react';
import {SignInEmailPageComponent} from './SignInEmailPageComponent';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useLoginWithEmail} from '../../../core/hooks';
import {useFocusEffect} from '@react-navigation/native';
import {useLoading} from '../../../core/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PublicStackParamList} from '../../Navigation';

export type SignInEmailFormProps = {
  email: string;
  password: string;
};

const SignInEmailFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('This is not a valid email.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

type NavigationScreenProps = NativeStackScreenProps<PublicStackParamList>;
type Props = NavigationScreenProps;

export function SignInEmailPagePresenter({navigation}: Props) {
  const {mutateAsync, isLoading} = useLoginWithEmail();
  const {setLoading} = useLoading();
  const initialValues: SignInEmailFormProps = {
    email: '',
    password: '',
  };
  const onHandleSubmit = async (values: SignInEmailFormProps) => {
    try {
      await mutateAsync({
        username: values.email,
        password: values.password,
      });
    } catch {
      console.log('error');
    }
  };

  const handleRegister = () => {
    navigation.navigate('SignUpEmail');
  };
  useFocusEffect(
    React.useCallback(() => {
      setLoading(isLoading);
    }, [isLoading, setLoading]),
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInEmailFormSchema}
      onSubmit={onHandleSubmit}>
      <SignInEmailPageComponent handleRegister={handleRegister} />
    </Formik>
  );
}
