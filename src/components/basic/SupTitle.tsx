import { CSSProperties } from 'react';

import { Difficulties } from '@/types';
import { getSupTitleColor } from '@/helpers';

interface MainTitleProps {
  text: string;
  fontSize?: string | number;
  slug?: Difficulties;
}

const SupTitle = ({ text, fontSize, slug }: MainTitleProps) => {
  const sxStyles: CSSProperties = {
    fontFamily: 'Monospace',
    fontStyle: 'oblique',
    fontWeight: 'bold',
    color: getSupTitleColor(slug || Difficulties.easy),
  };

  if (fontSize) {
    sxStyles.fontSize = fontSize;
  }

  return <sup style={sxStyles}>{text}</sup>;
};

export default SupTitle;
