import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getTasks } from '@/api/requests';
import { primaryColor } from '@/constants';
import { filterByComplexity } from '@/helpers';
import { TaskType, ErrorResponse } from '@/types';
import PageWrapper from '@/components/PageWrapper';
import TasksList from '@/components/Tasks/TasksList';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Difficulty() {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery<TaskType[] | ErrorResponse>({
    queryKey: ['tasks', 'favorites', slug],
    queryFn: () => getTasks(`?favorite=${true}&complexity=${slug}`),
  });

  const errorMessage = error?.message || (data && 'message' in data && data.message) || '';

  return (
    <PageWrapper title="Favorites" supTitle={slug}>
      <AlertLoadingWrapper loading={isPending} message={errorMessage} />
      {data && !('error' in data && data.error) && Array.isArray(data) ? (
        <TasksList rows={filterByComplexity(data, slug || '')} bgColor={primaryColor} />
      ) : null}
    </PageWrapper>
  );
}

export default Difficulty;
