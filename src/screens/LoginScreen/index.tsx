import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as s from './styles';

const LoginScreen: React.FC = () => {
  const {navigate} = useNavigation<any>();

  useEffect(() => {
    console.log('=====>');
  }, []);

  return (
    <s.SafeAreaView>
      <s.Content>
        <s.Logo />
        <s.Title>
          Программа {'\n'}поддержки пациентов {'\n'}и врачей
        </s.Title>
        <s.Buttons>
          <s.Button onPress={() => navigate('SignUp')}>
            <s.ButtonTitle>Регистрация</s.ButtonTitle>
          </s.Button>
          <s.Button border>
            <s.ButtonTitle>Врач</s.ButtonTitle>
          </s.Button>
        </s.Buttons>
      </s.Content>
    </s.SafeAreaView>
  );
};

export default LoginScreen;
