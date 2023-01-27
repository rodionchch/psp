import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as s from './styles';

const Header: React.FC = () => {
  const {goBack} = useNavigation<any>();

  return (
    <s.Header>
      <s.ButtonBack onPress={goBack}>
        <s.ButtonBackIcon />
      </s.ButtonBack>
      <s.Title>Регистрация в кабинете врача</s.Title>
    </s.Header>
  );
};

export default Header;
