import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import NoData from '@/components/basic/NoData';
import PageWrapper from '@/components/PageWrapper';

function NotSelectedTask() {
  return (
    <PageWrapper title="Tasks">
      <NoData />
      <Typography
        variant="body2"
        color="warning.main"
        sx={{ mt: 2, alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}
      >
        Please select a specific task!
        <Link to="/tasks/create" style={{ textDecoration: 'none' }}>
          <Button type="button" variant="text">
            Create new task
          </Button>
        </Link>
      </Typography>
    </PageWrapper>
  );
}

export default NotSelectedTask;
