import styled from 'styled-components/native';
import iconBack from '../../assets/icons/close.png';

export const Header = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.main};
  height: 60px;
  align-items: center;
  flex-direction: row;
`;

export const ButtonBack = styled.TouchableOpacity`
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
`;

export const ButtonBackIcon = styled.Image.attrs({
  source: iconBack,
})`
  width: 14px;
  height: 14px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: ${props => props.theme.font.family};
  font-weight: 600;
`;
