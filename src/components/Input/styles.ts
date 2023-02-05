import styled from 'styled-components/native';
import {IStyles} from '../../styled/styled';
import iconSuccess from '../../assets/icons/success.png';

export const InputWrapper = styled.View<IStyles>`
  height: 48px;
  flex: 100%;
  border: 1px solid #cacacc;
  border-radius: 8px;
  justify-content: center;
  ${props =>
    props?.focus &&
    `
  border-color: ${props?.theme?.colors?.main};
`}

  ${props =>
    props?.success &&
    `
  border-color: ${props?.theme?.colors?.success};
`}

${props =>
    props?.error &&
    `
    border-color: ${props?.theme?.colors?.error};
`}

${props =>
    props?.disabled &&
    `
    border-color: #CACACC;
    background: #F7F7F7
`}
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#A4A4A4',
})<IStyles>`
  padding: 0 16px;
  height: 100%;
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 500;
  font-size: 15px;
  color: ${props => props?.theme?.colors?.black};
`;

export const InputSuccessIcon = styled.Image.attrs({
  source: iconSuccess,
})`
  width: 9px;
  height: 6px;
  position: absolute;
  right: 8px;
  top: 20px;
`;

export const InputErrorText = styled.Text`
  color: ${props => props?.theme?.colors?.error};
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 600;
  font-size: 12px;
  position: absolute;
  right: 8px;
  top: 15px;
`;
