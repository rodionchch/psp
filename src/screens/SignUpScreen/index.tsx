import React from 'react';

import Header from '../../components/Header';
import {Formik} from 'formik';
import * as Yup from 'yup';

import * as s from './styles';

const SignupSchema = Yup.object().shape({
  lastName: Yup.string().min(2).max(70).required('Required'),
  firstName: Yup.string().min(2).max(70).required('Required'),
  middleName: Yup.string().min(2).max(70).required('Required'),
});

const SignUpScreen: React.FC = () => {
  const onHandleChange = (name, handleChange, setErrors) => {
    setErrors();
    return handleChange(name);
  };
  return (
    <s.SafeAreaView>
      <Header />
      <s.Logo />

      <s.Content>
        <s.ScrollView>
          <Formik
            initialValues={{lastName: '', firstName: '', middleName: ''}}
            onSubmit={values => {
              console.log('=1======>', values);
            }}
            validationSchema={SignupSchema}
            validateOnChange={false}
            validateOnBlur={false}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              setErrors,
            }) => (
              <>
                {console.log('ERRRRRRR======>', errors)}
                <s.Item>
                  <s.Label>Фамилия</s.Label>
                  <s.InputWrapper error={errors?.lastName}>
                    <s.Input
                      name="lastName"
                      onChangeText={() =>
                        onHandleChange('lastName', handleChange, setErrors)
                      }
                      onBlur={handleBlur('lastName')}
                      value={values.lastName}
                    />
                  </s.InputWrapper>
                </s.Item>

                <s.Item>
                  <s.Label>Имя</s.Label>

                  <s.InputWrapper error={errors?.firstName}>
                    <s.Input
                      name="firstName"
                      onChangeText={() =>
                        onHandleChange('firstName', handleChange, setErrors)
                      }
                      onBlur={handleBlur('firstName')}
                      value={values.firstName}
                    />
                  </s.InputWrapper>
                </s.Item>

                <s.Item>
                  <s.Label>Отчество</s.Label>

                  <s.InputWrapper error={errors?.middleName}>
                    <s.Input
                      name="middleName"
                      onChangeText={() =>
                        onHandleChange('middleName', handleChange, setErrors)
                      }
                      onBlur={handleBlur('middleName')}
                      value={values.middleName}
                    />
                  </s.InputWrapper>
                </s.Item>

                <s.ButtonSubmit onPress={handleSubmit}>
                  <s.ButtonSubmitText>Продолжить</s.ButtonSubmitText>
                </s.ButtonSubmit>
              </>
            )}
          </Formik>
        </s.ScrollView>
      </s.Content>
    </s.SafeAreaView>
  );
};

export default SignUpScreen;
