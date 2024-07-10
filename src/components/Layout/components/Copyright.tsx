import { Link } from 'react-router-dom';
import Typography, { TypographyOwnProps } from '@mui/material/Typography';

import { appName } from '@/constants';

function Copyright(props: TypographyOwnProps) {
  return (
    <Typography variant="body2" color="#9E9E9E" align="center" {...props}>
      {'Copyright © '}
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>
        <Typography color="#607D8B" variant="caption" sx={{ fontSize: 15 }}>
          {appName}
        </Typography>
      </Link>
      {`  ${new Date().getFullYear()}.`}
    </Typography>
  );
}

export default Copyright;
