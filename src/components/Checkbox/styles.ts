import styled from 'styled-components/native';
import iconCheck from '../../assets/icons/check.png';
import {IStyles} from '../../styled/styled';

export const Checkbox = styled.TouchableOpacity<IStyles>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1.5px solid rgba(188, 195, 208, 0.5);
  align-items: center;
  justify-content: center;
  ${props =>
    props.check &&
    `
      background-color: ${props?.theme?.colors?.success};
  `}
`;

export const CheckboxIcon = styled.Image.attrs({
  source: iconCheck,
})`
  width: 14px;
  height: 10px;
`;
