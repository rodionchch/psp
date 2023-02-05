import React, {useState} from 'react';
import OTPInputView from '@hirbod/react-native-otp-input';

type OtpProps = {
  code: string;
  setCode: (code: string) => void;
  onCodeFilled: (code: string) => void;
};

const Otp: React.FC<OtpProps> = ({code, setCode, onCodeFilled}) => {
  return (
    <OTPInputView
      style={{width: 270, height: 48}}
      pinCount={6}
      code={code}
      onCodeChanged={code => {
        setCode(code);
      }}
      autoFocusOnLoad
      codeInputFieldStyle={{
        width: 40,
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        color: '#000000',
        fontSize: 21,
      }}
      codeInputHighlightStyle={{
        borderColor: '#1E63EE',
      }}
      onCodeFilled={onCodeFilled}
    />
  );
};

export default Otp;
