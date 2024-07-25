import { ReactNode } from 'react';

import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';

import DialogTransition from '@/components/basic/DialogTransition';
import ContentBackground from '@/components/basic/ContentBackground';

interface CodeFullScreenDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CodeFullScreenDialog = ({ children, open, onClose }: CodeFullScreenDialogProps) => {
  return (
    <>
      <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={DialogTransition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar sx={{ backgroundColor: 'var(--main-bg--color)' }}>
            <Typography sx={{ ml: 2, flex: 1, fontWeight: 600 }} variant="h6" component="div">
              Code preview
            </Typography>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <ContentBackground>{children}</ContentBackground>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CodeFullScreenDialog;
