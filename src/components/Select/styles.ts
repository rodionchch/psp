import styled from 'styled-components/native';

export const Select = styled.TouchableOpacity`
  height: 48px;
  flex: 100%;
  border: 1px solid #cacacc;
  border-radius: 8px;
  width: 100%;
  justify-content: center;
  ${props =>
    props.disabled &&
    `
    background: #F7F7F7;
  `}
`;

export const Label = styled.Text`
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 500;
  font-size: 15px;
  padding: 0 16px;
  ${props =>
    props.disabled &&
    `color: #A4A4A4;
  `}
`;

export const Options = styled.View`
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cacacc;
  margin-bottom: 2px;
  background: ${props => props?.theme?.colors?.white};
`;

export const Option = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  flex: 100%;
  border-bottom: 10px solid #cacacc;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
`;

export const OptionText = styled.Text``;
