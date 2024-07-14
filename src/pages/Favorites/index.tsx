import { useQuery } from '@tanstack/react-query';

import { TaskType } from '@/types';
import { getTasks } from '@/api/requests';
import { primaryColor } from '@/constants';
import PageWrapper from '@/components/PageWrapper';
import TasksList from '@/components/Tasks/TasksList';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Favorites() {
  const { isPending, error, data } = useQuery<TaskType[]>({
    queryKey: ['tasks', 'favorites'],
    queryFn: () => getTasks(`?favorite=${true}`),
  });

  return (
    <PageWrapper title="Favorites">
      <AlertLoadingWrapper loading={isPending} message={error ? error.message || '' : ''} />
      <TasksList rows={data || []} bgColor={primaryColor} />
    </PageWrapper>
  );
}

export default Favorites;
