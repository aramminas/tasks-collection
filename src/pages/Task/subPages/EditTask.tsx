import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';

import { TaskType } from '@/types';
import PageWrapper from '@/components/PageWrapper';
import AdminForm from '@/components/Tasks/AdminForm';
import { getTasks, deleteTasks, updateTasks } from '@/api/requests';
import CreateEditTaskForm from '@/components/Tasks/CreateEditTaskForm';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function EditTask() {
  const navigate = useNavigate();
  const { id = '0' } = useParams();
  const [isAdmin, setAdmin] = useState(false);

  const { isPending, error, data } = useQuery<TaskType>({
    queryKey: ['tasks', 'single'],
    queryFn: () => getTasks(`/${id}`),
  });

  const { isPending: isDeleteLoading, mutate: deleteMutate } = useMutation({
    mutationFn: deleteTasks,
    onSuccess: () => {
      toast.success('task suceessfuly deleted!');
      setTimeout(() => {
        navigate('/common');
      }, 3000);
    },
    onError: () => {
      toast.error('Something went wrong...');
    },
  });

  const { isPending: isEditLoading, mutate: editMutate } = useMutation({
    mutationFn: updateTasks,
    onSuccess: () => {
      toast.success('task suceessfuly updated!');
    },
    onError: () => {
      toast.error('Something went wrong...');
    },
  });

  const handleDeleteTask = (taskId: string) => {
    deleteMutate(taskId);
  };

  const handleEditTask = (task: TaskType) => {
    editMutate(task);
  };

  return (
    <PageWrapper title="Edit Task">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AlertLoadingWrapper loading={isPending} message={error ? error.message || '' : ''} />
        {isAdmin ? (
          <CreateEditTaskForm
            task={data}
            deleteTask={handleDeleteTask}
            editTask={handleEditTask}
            deleteLoading={isDeleteLoading}
            loading={isEditLoading}
          />
        ) : (
          <AdminForm setAdmin={setAdmin} />
        )}
      </Box>
    </PageWrapper>
  );
}

export default EditTask;
