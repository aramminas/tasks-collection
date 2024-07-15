import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { TaskType } from '@/types';
import { getTasks } from '@/api/requests';
import TaskView from '@/components/Tasks/TaskView';
import PageWrapper from '@/components/PageWrapper';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Task() {
  const { id = '0' } = useParams();

  const { isPending, error, data } = useQuery<TaskType>({
    queryKey: ['tasks', 'single'],
    queryFn: () => getTasks(`/${id}`),
  });

  return (
    <PageWrapper title="Task">
      <AlertLoadingWrapper loading={isPending} message={error ? error.message || '' : ''} />
      {!!data && <TaskView task={data} />}
    </PageWrapper>
  );
}

export default Task;
