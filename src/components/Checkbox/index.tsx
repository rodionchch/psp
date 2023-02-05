import React, {useState} from 'react';
import * as s from './styles';

type CheckboxProps = {
  onChange: (ckeck: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({onChange}) => {
  const [check, setCheck] = useState(false);
  const onPress = () => {
    setCheck(!check);
    onChange(!check);
  };

  return (
    <s.Checkbox check={check} onPress={onPress}>
      <s.CheckboxIcon />
    </s.Checkbox>
  );
};

export default Checkbox;
