import React from 'react';
import * as s from './styles';

type ButtonProps = {
  onPress: () => void;
  label: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({onPress, label, disabled}) => {
  return (
    <s.ButtonSubmit onPress={onPress} disabled={disabled}>
      <s.ButtonSubmitText>{label}</s.ButtonSubmitText>
    </s.ButtonSubmit>
  );
};

export default Button;
