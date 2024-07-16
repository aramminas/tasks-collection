import { useQuery } from '@tanstack/react-query';

import { getTasks } from '@/api/requests';
import { primaryColor } from '@/constants';
import PageWrapper from '@/components/PageWrapper';
import TasksList from '@/components/Tasks/TasksList';
import { TaskType, TaskTypes, ErrorResponse } from '@/types';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Common() {
  const { isPending, error, data } = useQuery<TaskType[] | ErrorResponse>({
    queryKey: ['tasks', 'common'],
    queryFn: () => getTasks(`?type=${TaskTypes.Common}`),
  });

  const errorMessage = error?.message || (data && 'message' in data && data.message) || '';

  return (
    <PageWrapper title="Common">
      <AlertLoadingWrapper loading={isPending} message={errorMessage} />
      {data && !('error' in data && data.error) && Array.isArray(data) ? (
        <TasksList rows={data || []} bgColor={primaryColor} />
      ) : null}
    </PageWrapper>
  );
}

export default Common;
