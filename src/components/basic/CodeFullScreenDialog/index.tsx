import { ReactNode } from 'react';
import toast from 'react-hot-toast';

import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DialogTransition from '@/components/basic/DialogTransition';
import ContentBackground from '@/components/basic/ContentBackground';

interface CodeFullScreenDialogProps {
  open: boolean;
  code?: string;
  onClose: () => void;
  children: ReactNode;
}

const CodeFullScreenDialog = ({ children, open, onClose, code }: CodeFullScreenDialogProps) => {
  const handleCopyCode = async () => {
    if (!code) {
      return;
    }

    await navigator.clipboard.writeText(code);
    toast.success('Code copied!');
  };

  return (
    <>
      <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={DialogTransition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar sx={{ backgroundColor: 'var(--main-bg--color)' }}>
            <Typography sx={{ ml: 2, flex: 1, fontWeight: 600 }} variant="h6" component="div">
              Code preview
            </Typography>
            {!!code && (
              <Tooltip title="copy code">
                <IconButton
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  aria-label="copy code"
                  onClick={handleCopyCode}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            )}
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
