import { useQuery } from '@tanstack/react-query';

import { getTasks } from '@/api/requests';
import { primaryColor } from '@/constants';
import { TaskType, TaskTypes } from '@/types';
import PageWrapper from '@/components/PageWrapper';
import TasksList from '@/components/Tasks/TasksList';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Logical() {
  const { isPending, error, data } = useQuery<TaskType[]>({
    queryKey: ['tasks', 'common'],
    queryFn: () => getTasks(`?type=${TaskTypes.Logical}`),
  });

  return (
    <PageWrapper title="Logical">
      <AlertLoadingWrapper loading={isPending} message={error ? error.message || '' : ''} />
      <TasksList rows={data || []} bgColor={primaryColor} />
    </PageWrapper>
  );
}

export default Logical;