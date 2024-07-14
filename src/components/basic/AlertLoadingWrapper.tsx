import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Loading, { LoadingProps } from '@/components/basic/Loading';
import AlertBlock, { AlertBlockProps } from '@/components/basic/AlertBlock';

type AlertLoadingWrapperProps = { loading: boolean } & AlertBlockProps & LoadingProps;

const AlertLoadingWrapper = ({ loading, color, message }: AlertLoadingWrapperProps) => {
  return (
    <Box sx={{ mb: loading || message ? 2 : 0 }}>
      {loading && <Loading color={color} />}
      {message && loading && <Divider variant="fullWidth" component="hr" sx={{ marginY: 2 }} />}
      {message && <AlertBlock message={message} />}
    </Box>
  );
};

export default AlertLoadingWrapper;
