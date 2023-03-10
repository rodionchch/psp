import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {Formik} from 'formik';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';
import Upload from '../../components/Upload';
import Button from '../../components/Button';

import {cities} from './data';

import * as s from './styles';

const SignupSchema = Yup.object().shape({
  lastName: Yup.string().min(2).max(70).required('Required'),
  firstName: Yup.string().min(2).max(70).required('Required'),
  middleName: Yup.string().min(2).max(70).required('Required'),
});

const form = {
  lastName: 'lastName',
  firstName: 'firstName',
  middleName: 'middleName',
  phone: 'phone',
  email: 'email',
  promo: 'promo',
  city: 'city',
  personalData: 'personalData',
  promotion: 'promotion',
  gallery: 'gallery',
  file: 'file',
};

const SignUpScreen: React.FC = () => {
  const {navigate} = useNavigation<any>();
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <s.SafeAreaView>
      <Header />
      <s.Logo />

      <s.Content>
        <Formik
          initialValues={{
            [form.lastName]: '',
            [form.firstName]: '',
            [form.middleName]: '',
            [form.phone]: '+7 (___) ___-__-__',
            [form.promo]: '',
            [form.city]: '',
            [form.personalData]: false,
            [form.promotion]: false,
            [form.gallery]: false,
            [form.file]: null,
          }}
          onSubmit={values => {
            console.log('Data: ', values);
            navigate('Otp');
          }}
          validationSchema={SignupSchema}
          validateOnChange={false}
          validateOnBlur={false}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            setErrors,
            setFieldValue,
          }) => (
            <s.ScrollView>
              <s.Item first>
                <s.Label>??????????????</s.Label>
                <Input
                  name={form.lastName}
                  value={values?.[form.lastName] as string}
                  error={!!errors?.lastName}
                  focus={focus === form.lastName}
                  setFocus={setFocus}
                  setErrors={setErrors}
                  handleChange={handleChange}
                  placeholder={'??????????????'}
                />
              </s.Item>
              <s.Item>
                <s.Label>??????</s.Label>
                <Input
                  name={form.firstName}
                  value={values?.[form.firstName] as string}
                  error={!!errors?.firstName}
                  focus={focus === form.firstName}
                  setFocus={setFocus}
                  setErrors={setErrors}
                  handleChange={handleChange}
                  placeholder={'??????'}
                />
              </s.Item>
              <s.Item>
                <s.Label>????????????????</s.Label>
                <Input
                  name={form.middleName}
                  value={values?.[form.middleName] as string}
                  error={!!errors?.middleName}
                  focus={focus === form.middleName}
                  setFocus={setFocus}
                  setErrors={setErrors}
                  handleChange={handleChange}
                  placeholder={'????????????????'}
                />
              </s.Item>

              <s.Item>
                <s.Label>??????????????</s.Label>
                <Input
                  name={form.phone}
                  value={values?.[form.phone] as string}
                  error={!!errors?.phone}
                  focus={focus === form.phone}
                  setFocus={setFocus}
                  setErrors={setErrors}
                  handleChange={handleChange}
                  placeholder={'??????????????'}
                  disabled
                />
              </s.Item>

              <s.Item>
                <s.Label>Email</s.Label>
                <Input
                  name={form.email}
                  value={values?.[form.email] as string}
                  error={!!errors?.email}
                  focus={focus === form.email}
                  setFocus={setFocus}
                  setErrors={setErrors}
                  handleChange={handleChange}
                  placeholder={'Email'}
                  disabled
                />
              </s.Item>

              <s.Item zIndex={100}>
                <s.Label>??????????</s.Label>

                <Select
                  data={cities}
                  onChange={(val: string) => {
                    if (val) {
                      setFieldValue(form.city, val);
                    }
                  }}
                />
              </s.Item>

              <s.Item>
                <s.Label>????????????</s.Label>

                <Upload
                  onChange={(val: string | null) => {
                    if (val) {
                      setFieldValue(form.file, val);
                    }
                  }}
                />
              </s.Item>

              <s.Item>
                <s.Label>
                  ????????????????-{'\n'}
                  ??????????
                </s.Label>

                <Select data={[]} placeholder={'??????????????????????????'} disabled />
              </s.Item>

              <s.Agreements>
                <s.Agreement>
                  <Checkbox
                    onChange={(check: boolean) => {
                      setFieldValue(form.personalData, check);
                    }}
                  />
                  <s.AgreementItem>
                    <s.AgreementLink>
                      <s.AgreementLinkText>
                        ???????????????? ???? ?????????????????? ???????????????????????? ????????????
                      </s.AgreementLinkText>
                    </s.AgreementLink>
                  </s.AgreementItem>
                </s.Agreement>

                <s.Agreement>
                  <Checkbox
                    onChange={(check: boolean) => {
                      setFieldValue(form.promotion, check);
                    }}
                  />
                  <s.AgreementItem>
                    <s.AgreementLink>
                      <s.AgreementLinkText>
                        ???????????????? ???? ?????????????? ?? ????????????
                      </s.AgreementLinkText>
                    </s.AgreementLink>
                    <s.AgreementText>???? ?????????????????????? ????????????????????</s.AgreementText>
                  </s.AgreementItem>
                </s.Agreement>

                <s.Agreement>
                  <Checkbox
                    onChange={(check: boolean) => {
                      setFieldValue(form.gallery, check);
                    }}
                  />
                  <s.AgreementItem>
                    <s.AgreementLink>
                      <s.AgreementLinkText>
                        ???????????????? ???? ?????????????? ?? ??????????????
                      </s.AgreementLinkText>
                    </s.AgreementLink>
                    <s.AgreementText>?????????????????????????????? ????????????</s.AgreementText>
                  </s.AgreementItem>
                </s.Agreement>
              </s.Agreements>

              <s.Item style={{marginBottom: 18}}>
                <s.Label>?????????????? {'\n'}????????????????</s.Label>
                <Input
                  name={form.promo}
                  value={values?.[form.promo] as string}
                  error={!!errors?.promo}
                  focus={focus === form.promo}
                  setFocus={setFocus}
                  setErrors={setErrors}
                  handleChange={handleChange}
                  placeholder={'????????????????'}
                  disabled
                />
              </s.Item>

              <Button onPress={handleSubmit} label={'????????????????????'} />
            </s.ScrollView>
          )}
        </Formik>
      </s.Content>
    </s.SafeAreaView>
  );
};

export default SignUpScreen;
