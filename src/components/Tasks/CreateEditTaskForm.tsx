import { useMemo, useState } from 'react';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Difficulties, TaskTypes, TaskType } from '@/types';
import DeleteTaskDialog from '@/components/Tasks/DeleteTaskDialog';

const TaskSchema = z.object({
  question: z.string().trim().min(10, 'The question must contain at least 10 characters'),
  answer: z.string(),
  code: z.string(),
  answerCode: z.string(),
  answerOptions: z.string(),
  favorite: z.boolean(),
  type: z.enum([TaskTypes.Common, TaskTypes.Logical]),
  complexity: z.enum([
    Difficulties.easy,
    Difficulties.medium,
    Difficulties.hard,
    Difficulties.extraHard,
  ]),
});

interface CreateEditTaskFormProps {
  task?: TaskType;
  loading?: boolean;
  deleteLoading?: boolean;
  deleteTask?: (taskId: string) => void;
  editTask?: (task: TaskType) => void;
  createTask?: (task: Omit<TaskType, 'id'>) => void;
}

function CreateEditTaskForm({
  task,
  deleteTask,
  deleteLoading,
  loading,
  createTask,
  editTask,
}: CreateEditTaskFormProps) {
  const [open, setOpen] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(TaskSchema),
    defaultValues: useMemo(() => {
      return task;
    }, [task]),
  });

  const onSubmitHandler = async (data: Omit<TaskType, 'id'> | TaskType) => {
    // edit task
    if (task?.id) {
      editTask?.({ ...data, id: task?.id || '0' });
      return;
    }

    // create task
    if (!task?.id) {
      createTask?.({ ...data, createdAt: new Date() });
    }

    reset();
  };

  const handleDeleteTask = () => {
    deleteTask?.(task?.id || '0');
  };

  const openDeleteDialog = () => {
    setOpen(true);
  };

  const resetForm = () => {
    reset();
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              minRows={2}
              multiline
              required
              fullWidth
              autoFocus
              label="Question"
              error={!!errors?.question?.message}
              helperText={!!errors?.question?.message && errors?.question?.message}
              {...register('question')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              minRows={2}
              multiline
              fullWidth
              label="Code"
              error={!!errors?.code?.message}
              helperText={!!errors?.code?.message && errors?.code?.message}
              {...register('code')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              minRows={2}
              multiline
              fullWidth
              label="Answer"
              error={!!errors?.answer?.message}
              helperText={!!errors?.answer?.message && errors?.answer?.message}
              {...register('answer')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              minRows={2}
              multiline
              fullWidth
              label="Answer code"
              error={!!errors?.answerCode?.message}
              helperText={!!errors?.answerCode?.message && errors?.answerCode?.message}
              {...register('answerCode')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              minRows={2}
              multiline
              fullWidth
              label="Answer options"
              error={!!errors?.answerOptions?.message}
              helperText={!!errors?.answerOptions?.message && errors?.answerOptions?.message}
              {...register('answerOptions')}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl
              sx={{ m: 1, minWidth: 150 }}
              error={!!errors?.type?.message}
              {...register('type')}
            >
              <InputLabel id="type">Type</InputLabel>
              <Controller
                name="type"
                control={control}
                defaultValue={TaskTypes.Common}
                render={({ field: { onChange, value } }) => (
                  <Select labelId="type" label="Type" value={value} onChange={onChange}>
                    <MenuItem value={TaskTypes.Common}>Common</MenuItem>
                    <MenuItem value={TaskTypes.Logical}>Logical</MenuItem>
                  </Select>
                )}
              />
              {!!errors?.type?.message && <FormHelperText>{errors?.type?.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl
              sx={{ m: 1, minWidth: 150 }}
              error={!!errors?.type?.message}
              {...register('complexity')}
            >
              <InputLabel id="complexity">Complexity</InputLabel>
              <Controller
                name="complexity"
                control={control}
                defaultValue={Difficulties.easy}
                render={({ field: { onChange, value } }) => (
                  <Select labelId="complexity" label="Complexity" value={value} onChange={onChange}>
                    <MenuItem value={Difficulties.easy}>Easy</MenuItem>
                    <MenuItem value={Difficulties.medium}>Medium</MenuItem>
                    <MenuItem value={Difficulties.hard}>Hard</MenuItem>
                    <MenuItem value={Difficulties.extraHard}>Extra hard</MenuItem>
                  </Select>
                )}
              />
              {!!errors?.complexity?.message && (
                <FormHelperText>{errors?.complexity?.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl
              required
              sx={{ m: 3 }}
              component="fieldset"
              variant="standard"
              error={!!errors?.favorite?.message}
              {...register('favorite')}
            >
              <FormControlLabel
                control={
                  <Controller
                    name="favorite"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Checkbox checked={!!value} onChange={onChange} />
                    )}
                  />
                }
                label="Favorite"
              />
              {!!errors?.favorite?.message && (
                <FormHelperText>{errors?.favorite?.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <Button variant="outlined" type="button" onClick={resetForm}>
            Reset
          </Button>
          {!!task?.id && (
            <Button variant="outlined" type="button" color="error" onClick={openDeleteDialog}>
              Delete
            </Button>
          )}
          <LoadingButton variant="contained" type="submit" loading={loading}>
            {task?.id ? 'Edit' : 'Create'}
          </LoadingButton>
        </Grid>
      </Box>
      <DeleteTaskDialog
        open={open}
        handleClose={setOpen}
        loading={!!deleteLoading}
        deleteTask={handleDeleteTask}
      />
    </>
  );
}

export default CreateEditTaskForm;
