import { ReactNode } from 'react';

interface InfoTextProps {
  children: ReactNode;
  type?: 'small';
}

const InfoText = ({ children, type }: InfoTextProps) => {
  return (
    <span style={{ color: 'grey', fontSize: type === 'small' ? '12px' : '15px' }}>{children}</span>
  );
};

export default InfoText;
