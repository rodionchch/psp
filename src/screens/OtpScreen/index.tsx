import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Otp from '../../components/Otp';

import * as s from './styles';

const CODE = '000000';

const OtpScreen: React.FC = () => {
  const {navigate} = useNavigation<any>();
  const [code, setCode] = useState('');

  return (
    <s.SafeAreaView>
      <Header />
      <s.Logo />

      <s.Content>
        <s.Title>Введите код авторизации</s.Title>
        <Otp
          code={code}
          setCode={setCode}
          onCodeFilled={code => {
            if (code === CODE) {
              console.log('hello');
            }
          }}
        />

        <s.Button>
          <s.ButtonText>Запросить код авторизации</s.ButtonText>
        </s.Button>

        <Button
          disabled={code?.length < 6}
          onPress={() => {
            if (code === CODE) {
              navigate('Success');
            } else {
              Alert.alert('Неверный код авторизации');
            }
          }}
          label={'Продолжить'}
        />
      </s.Content>
    </s.SafeAreaView>
  );
};

export default OtpScreen;
