import { ReactNode } from 'react';

interface TextWrapperProps {
  isBlur?: boolean;
  children: ReactNode;
}

function TextWrapper({ children, isBlur }: TextWrapperProps) {
  return (
    <div
      style={{
        textAlign: 'justify',
        color: isBlur ? 'transparent' : '#4c4c4c',
        userSelect: isBlur ? 'none' : 'initial',
        textShadow: isBlur ? '0 0 12px rgba(0,0,0,0.5)' : 'initial',
      }}
    >
      {children}
    </div>
  );
}

export default TextWrapper;
