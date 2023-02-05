import React, {useState, useMemo} from 'react';
import {Select as SelectData} from '../../types/select';
import * as s from './styles';

type SelectProps = {
  data: SelectData;
  onChange?: (id: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

const Select: React.FC<SelectProps> = ({
  data,
  onChange,
  placeholder,
  disabled,
}) => {
  const [showSelect, setShowSelect] = useState(false);
  const [select, setSelect] = useState<string | null>(null);

  const onToggleSelect = () => {
    if (showSelect) {
      setShowSelect(false);
    } else {
      setShowSelect(true);
    }
  };

  const onSelect = (id: string) => {
    setSelect(id);
    setShowSelect(false);
    if (onChange) onChange(id);
  };

  const label = useMemo(() => {
    if (select) {
      return data?.find(el => el.id === select)?.name;
    } else if (placeholder) {
      return placeholder;
    }

    return 'Выберите';
  }, [select, data]);

  return (
    <s.Select onPress={onToggleSelect} disabled={disabled}>
      <s.Label disabled={disabled}>{label}</s.Label>
      {showSelect && (
        <s.Options>
          {data.map(({id, name}) => (
            <s.Option
              key={id}
              onPress={() => {
                onSelect(id);
              }}>
              <s.OptionText>{name}</s.OptionText>
            </s.Option>
          ))}
        </s.Options>
      )}
      <s.ArrowIcon open={showSelect} />
    </s.Select>
  );
};

export default Select;
