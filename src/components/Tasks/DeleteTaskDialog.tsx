import { useState } from 'react';
import toast from 'react-hot-toast';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import MainTitle from '@/components/basic/MainTitle';
import AdminForm from '@/components/Tasks/AdminForm';
import DialogTransition from '@/components/basic/DialogTransition';

interface DeleteTaskDialogProps {
  open: boolean;
  loading: boolean;
  deleteTask: () => void;
  handleClose: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

const DeleteTaskDialog = ({ open, handleClose, loading, deleteTask }: DeleteTaskDialogProps) => {
  const [isAdmin, setAdmin] = useState(false);
  const handleDeleteTask = () => {
    if (isAdmin) {
      deleteTask();
      return;
    }

    toast.error('You do not have permission to delete this task.');
  };

  const closeDialog = () => {
    setAdmin(false);
    handleClose(false);
  };

  return (
    <Dialog
      open={open}
      keepMounted
      TransitionComponent={DialogTransition}
      onClose={closeDialog}
      fullWidth
    >
      <DialogTitle>
        <MainTitle text="Delete Task" variant="caption" fontSize={20} />
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 2, gap: 1 }}>
          <Typography variant="h6" sx={{ color: 'secondary.main' }}>
            Are you going to delete this task?
          </Typography>
          <MainTitle
            text="Confirm your Administrator permission and click the delete button if you are sure."
            fontSize={10}
          />
        </Box>
        {isAdmin ? (
          <>
            <Divider sx={{ my: 1 }} />
            <Typography variant="h6" sx={{ color: 'error.main' }}>
              Now you can delete the task.
            </Typography>
          </>
        ) : (
          <AdminForm setAdmin={setAdmin} />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="secondary">
          Close
        </Button>
        <LoadingButton onClick={handleDeleteTask} loading={loading}>
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTaskDialog;
