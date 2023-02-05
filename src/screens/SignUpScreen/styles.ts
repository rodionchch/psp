import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {IStyles} from '../../styled/styled';
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

export const ScrollView = styled.ScrollView`
  padding: 0px 15px 0 17px;
`;

export const Item = styled.View<IStyles>`
  width: 100%;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.column &&
    `
    flex-direction: column;
    align-items: flex-start;
  `}
  ${props =>
    props.first &&
    `
    margin-top: 60px
  `}
`;

export const Label = styled.Text`
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 600;
  font-size: 12px;
  flex: 95px;
`;

export const Agreements = styled.View`
  margin: 16px 0 8px;
`;
export const Agreement = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const AgreementItem = styled.View`
  margin-left: 16px;
  justify-content: center;
`;

export const AgreementLink = styled.TouchableOpacity``;

export const AgreementLinkText = styled.Text`
  font-family: ${props => props?.theme?.font?.family};
  color: ${props => props?.theme?.colors.main};
  font-weight: 600;
  font-size: 13px;
`;

export const AgreementText = styled.Text`
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 600;
  font-size: 13px;
`;
