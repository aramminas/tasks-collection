import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getTasks } from '@/api/requests';
import { TaskType, ErrorResponse } from '@/types';
import TaskView from '@/components/Tasks/TaskView';
import PageWrapper from '@/components/PageWrapper';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Task() {
  const { id = '0' } = useParams();

  const { isPending, error, data } = useQuery<TaskType | ErrorResponse>({
    queryKey: ['tasks', 'single'],
    queryFn: () => getTasks(`/${id}`),
  });

  const errorMessage = error?.message || (data && 'message' in data && data.message) || '';

  return (
    <PageWrapper title="Task">
      <AlertLoadingWrapper loading={isPending} message={errorMessage} />
      {data && 'id' in data && data.id ? <TaskView task={data} /> : null}
    </PageWrapper>
  );
}

export default Task;
