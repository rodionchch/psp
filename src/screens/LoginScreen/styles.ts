import styled from 'styled-components/native';
import iconLogo from '../../assets/icons/logo.png';

export const SafeAreaView = styled.SafeAreaView`
  background-color: ${props => props?.theme?.colors?.main};
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${props => props?.theme?.colors?.main};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
`;

export const Logo = styled.Image.attrs({
  source: iconLogo,
})`
  width: 112px;
  height: 112px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  margin-bottom: 32%;
`;

export const Buttons = styled.View`
  padding: 0 20px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity<{border?: boolean}>`
  height: 52px;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  ${props =>
    props.border &&
    `
  border: 2px solid #ffffff;

  `}
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  font-family: ${props => props?.theme?.font?.family};
`;
