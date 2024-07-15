import { z } from 'zod';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { checkAdminKey } from '@/helpers/admin';
import { AdminFormProps } from '@/components/Tasks/types';

const AdminSchema = z.object({
  adminSecurityKey: z
    .string({
      required_error: 'Admin key is required!',
    })
    .trim()
    .min(8, 'The Admin key must contain at least 8 characters')
    .max(25, 'The Admin key must not contain more than 25 characters'),
});

function AdminForm({ setAdmin }: AdminFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(AdminSchema),
  });

  const onSubmitHandler = ({ adminSecurityKey }: FieldValues) => {
    checkAdminKey(adminSecurityKey)
      ? setAdmin(true)
      : setError('adminSecurityKey', { type: 'custom', message: 'Invalid key!' });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          autoFocus
          label="Admin key"
          type="password"
          autoComplete="false"
          error={!!errors?.adminSecurityKey?.message}
          helperText={
            <>
              {!!errors?.adminSecurityKey?.message
                ? errors?.adminSecurityKey?.message || ''
                : 'Only admin can create/edit task.'}
            </>
          }
          {...register('adminSecurityKey')}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        <Button variant="contained" type="submit">
          Admin
        </Button>
      </Grid>
    </Box>
  );
}

export default AdminForm;
