import React from 'react';
import {SignUpEmailPageComponent} from './SignUpEmailPageComponent';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useRegisterWithEmail} from '../../../core/hooks';
import {useFocusEffect} from '@react-navigation/native';
import {useLoading} from '../../../core/hooks';

export type SignUpEmailFormProps = {
  document: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpEmailFormSchema = yup.object().shape({
  document: yup.string().required('Document is required.'),
  phone: yup.string().required('Phone is required.'),
  email: yup
    .string()
    .email('This is not a valid email.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match.')
    .required('Confirm Password is required.'),
});
export function SignUpEmailPagePresenter() {
  const {mutateAsync, isLoading} = useRegisterWithEmail();
  const {setLoading} = useLoading();
  const initialValues: SignUpEmailFormProps = {
    document: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword: '',
  };
  const onHandleSubmit = async (values: SignUpEmailFormProps) => {
    try {
      await mutateAsync({
        username: values.email,
        password: values.password,
      });
    } catch {
      console.log('error');
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      setLoading(isLoading);
    }, [isLoading, setLoading]),
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpEmailFormSchema}
      onSubmit={onHandleSubmit}>
      <SignUpEmailPageComponent />
    </Formik>
  );
}
