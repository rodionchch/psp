import styled from 'styled-components/native';

export const ButtonSubmit = styled.TouchableOpacity`
  background: ${props => props?.theme?.colors?.main};
  border-radius: 12px;
  height: 52px;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${props =>
    props.disabled &&
    `
    opacity: 0.5
  `}
`;

export const ButtonSubmitText = styled.Text`
  color: #ffffff;
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 600;
  font-size: 17px;
`;
