import Typography, { TypographyOwnProps } from '@mui/material/Typography';

import { Difficulties } from '@/types';
import { primaryColor } from '@/constants';
import SupTitle from '@/components/basic/SupTitle';

interface MainTitleProps {
  text: string;
  supText?: Difficulties;
  variant?: TypographyOwnProps['variant'];
  fontSize?: string | number;
}

const MainTitle = ({ text, variant = 'h4', fontSize, supText }: MainTitleProps) => {
  const sxStyles: TypographyOwnProps['sx'] = {
    fontFamily: 'Monospace',
    fontStyle: 'oblique',
    fontWeight: 'bold',
    color: primaryColor,
  };

  if (fontSize) {
    sxStyles.fontSize = fontSize;
  }

  return (
    <Typography variant={variant} sx={sxStyles}>
      {text}
      {!!supText && <SupTitle text={supText} fontSize={12} slug={supText} />}
    </Typography>
  );
};

export default MainTitle;
