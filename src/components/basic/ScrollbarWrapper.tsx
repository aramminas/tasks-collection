import { ReactNode } from 'react';

interface ScrollbarWrapperProps {
  children: ReactNode;
}

function ScrollbarWrapper({ children }: ScrollbarWrapperProps) {
  return <div style={{ overflow: 'auto', maxHeight: '400px' }}>{children}</div>;
}

export default ScrollbarWrapper;
