import React from 'react';
import {useNavigation} from '@react-navigation/native';

import * as s from './styles';
import Button from '../../components/Button';

const SuccessScreen: React.FC = () => {
  const {navigate} = useNavigation<any>();

  return (
    <s.SafeAreaView>
      <s.Content>
        <s.Title>Success</s.Title>
        <Button
          onPress={() => {
            navigate('Login');
          }}
          label="Go to Login"
        />
      </s.Content>
    </s.SafeAreaView>
  );
};

export default SuccessScreen;
