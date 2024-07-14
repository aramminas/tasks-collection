import { ReactNode } from 'react';

import Typography from '@mui/material/Typography';

import { primaryColor } from '@/constants';

interface TaskTitleProps {
  children: ReactNode;
}

function TaskTitle({ children }: TaskTitleProps) {
  return (
    <Typography
      variant="h6"
      className="task-label"
      sx={{
        fontWeight: 600,
        textShadow: `1px 1px 10px ${primaryColor}, 2px 2px 10px ${primaryColor}`,
      }}
    >
      {children}
    </Typography>
  );
}

export default TaskTitle;
