import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import iconLogo from '../../assets/icons/logo.png';

export const SafeAreaView = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${props => props.theme.colors.background};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: iconLogo,
})`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 44px;
  left: ${Dimensions.get('window').width / 2 - 30 + 'px'};
  z-index: 100;
`;

export const ScrollView = styled.ScrollView`
  padding: 60px 15px 0 17px;
`;

export const Item = styled.View`
  width: 100%;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${props => props.theme.font.family};
  font-weight: 600;
  font-size: 12px;
  flex: 80px;
`;

export const InputWrapper = styled.View`
  height: 48px;
  flex: 100%;
  border: 1px solid #cacacc;
  border-radius: 8px;
  justify-content: center;
  ${props =>
    props.error &&
    `
      background: ${props.theme.colors.error};
    `}
`;

export const Input = styled.TextInput`
  padding: 0 16px;
  height: 100%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background: ${props => props.theme.colors.main};
  border-radius: 12px;
  height: 52px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSubmitText = styled.Text`
  color: #ffffff;
  font-family: ${props => props.theme.font.family};
  font-weight: 600;
  font-size: 17px;
`;
