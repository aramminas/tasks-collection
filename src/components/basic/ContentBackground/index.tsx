import { ReactNode } from 'react';

import './styles.css';

interface ContentBackgroundProps {
  children: ReactNode;
}

const ContentBackground = ({ children }: ContentBackgroundProps) => {
  return (
    <div className="content-bg">
      <div className="layers-bg" />
      <div className="layers-bg second-layer" />
      <div className="layers-bg third-layer" />
      <div className="content-bg-wrapper">{children}</div>
    </div>
  );
};

export default ContentBackground;
