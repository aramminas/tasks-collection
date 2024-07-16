import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import Box from '@mui/material/Box';

import { TaskType } from '@/types';
import { createTasks } from '@/api/requests';
import PageWrapper from '@/components/PageWrapper';
import AdminForm from '@/components/Tasks/AdminForm';
import CreateEditTaskForm from '@/components/Tasks/CreateEditTaskForm';

function CreateTask() {
  const [isAdmin, setAdmin] = useState(false);

  const { isPending, mutate } = useMutation({
    mutationFn: createTasks,
    onSuccess: (data) => {
      if ('error' in data && data?.error) {
        const errorMessage =
          data?.message && typeof data.message === 'string'
            ? data.message
            : 'Something went wrong...';
        toast.error(errorMessage);
        return;
      }

      toast.success('task suceessfuly created!');
    },
    onError: () => {
      toast.error('Something went wrong...');
    },
  });

  const handleCreateTask = (task: Omit<TaskType, 'id'>) => {
    mutate(task);
  };

  return (
    <PageWrapper title="Create Task">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {isAdmin ? (
          <CreateEditTaskForm loading={isPending} createTask={handleCreateTask} />
        ) : (
          <AdminForm setAdmin={setAdmin} />
        )}
      </Box>
    </PageWrapper>
  );
}

export default CreateTask;
