import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import iconLogo from '../../assets/icons/logo.png';

export const SafeAreaView = styled.SafeAreaView`
  background-color: ${props => props?.theme?.colors?.background};
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${props => props?.theme?.colors?.background};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
  flex: 1;
  align-items: center;
  padding: 56px 16px 0;
`;

export const Title = styled.Text`
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 600;
  font-size: 21px;
  line-height: 28px;
  margin-bottom: 14px;
`;

export const Logo = styled.Image.attrs({
  source: iconLogo,
})`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 44px;
  left: ${Dimensions?.get('window')?.width / 2 - 30 + 'px'};
  z-index: 100;
`;

export const Button = styled.TouchableOpacity`
  padding: 16px;
`;

export const ButtonText = styled.Text`
  color: ${props => props?.theme?.colors?.main};
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 600;
  font-size: 14px;
`;
