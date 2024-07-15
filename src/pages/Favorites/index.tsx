import { useQuery } from '@tanstack/react-query';

import { getTasks } from '@/api/requests';
import { primaryColor } from '@/constants';
import { TaskType, ErrorResponse } from '@/types';
import PageWrapper from '@/components/PageWrapper';
import TasksList from '@/components/Tasks/TasksList';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Favorites() {
  const { isPending, error, data } = useQuery<TaskType[] | ErrorResponse>({
    queryKey: ['tasks', 'favorites'],
    queryFn: () => getTasks(`?favorite=${true}`),
  });

  const errorMessage = error?.message || (data && 'message' in data && data.message) || '';

  return (
    <PageWrapper title="Favorites">
      <AlertLoadingWrapper loading={isPending} message={errorMessage} />
      {data && 'error' in data && !data?.error && Array.isArray(data) ? (
        <TasksList rows={data || []} bgColor={primaryColor} />
      ) : null}
    </PageWrapper>
  );
}

export default Favorites;
