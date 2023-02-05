import React, {ChangeEvent, useState} from 'react';
import {FormikErrors} from 'formik/dist/types';
import * as s from './styles';

type InputProps = {
  name: string;
  value: string;
  focus?: boolean;
  error?: boolean;
  setFocus?: (focus: string) => void;
  setErrors?: (errors: FormikErrors<{[x: string]: string}>) => void;
  handleChange?: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  disabled?: boolean;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  name,
  value,
  focus,
  error,
  setFocus,
  setErrors,
  handleChange,
  disabled,
  placeholder,
}) => {
  const [success, setSuccess] = useState<string[]>([]);

  const onHandleChange = ({
    name,
    value,
    handleChange,
    setErrors,
  }: Partial<InputProps>) => {
    if (setErrors && handleChange) {
      setErrors({});
      return handleChange(name)(value || '');
    }
  };

  const onHandleBlur = (name: string, value: string) => {
    if (value?.length > 1) {
      if (!success.includes(name)) {
        setSuccess([...success, name]);
      }
    } else {
      setSuccess(success.filter(n => n !== name));
    }
  };

  return (
    <s.InputWrapper
      error={!!error}
      success={!!success.includes(name)}
      focus={!!focus}
      disabled={disabled}>
      <s.Input
        name={name}
        onChangeText={value => {
          onHandleChange({name, value, handleChange, setErrors});
        }}
        onFocus={() => {
          if (setFocus && setErrors) {
            setFocus(name);
            setErrors({});
          }
        }}
        onBlur={() => {
          onHandleBlur(name, value);
        }}
        value={value}
        editable={!disabled}
        placeholder={placeholder}
      />
      {!!success.includes(name) && <s.InputSuccessIcon />}
      {!!error && <s.InputErrorText>Заполните поле</s.InputErrorText>}
    </s.InputWrapper>
  );
};

export default Input;
