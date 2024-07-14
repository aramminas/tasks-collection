import { Link } from 'react-router-dom';

import Typography, { TypographyOwnProps } from '@mui/material/Typography';

import { appName, greenGrey } from '@/constants';
import TaskLink from '@/components/Tasks/TaskLink';

function Copyright(props: TypographyOwnProps) {
  return (
    <Typography variant="body2" color="#9E9E9E" align="center" {...props}>
      {'Copyright © '}
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>
        <Typography color={greenGrey} variant="caption" sx={{ fontSize: 15 }}>
          {appName}
        </Typography>
      </Link>
      {`  ${new Date().getFullYear()}.`}
      <TaskLink />
    </Typography>
  );
}

export default Copyright;
