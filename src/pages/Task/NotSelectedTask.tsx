import Typography from '@mui/material/Typography';

import NoData from '@/components/basic/NoData';
import PageWrapper from '@/components/PageWrapper';

function NotSelectedTask() {
  return (
    <PageWrapper title="Task">
      <NoData />
      <Typography sx={{ mt: 2, alignItems: 'center' }} variant="body2" color="warning.main">
        Please select a specific task!
      </Typography>
    </PageWrapper>
  );
}

export default NotSelectedTask;
