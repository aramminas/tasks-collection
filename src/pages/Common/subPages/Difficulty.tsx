import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getTasks } from '@/api/requests';
import { primaryColor } from '@/constants';
import { filterByComplexity } from '@/helpers';
import PageWrapper from '@/components/PageWrapper';
import TasksList from '@/components/Tasks/TasksList';
import { TaskType, TaskTypes, ErrorResponse } from '@/types';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Difficulty() {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery<TaskType[] | ErrorResponse>({
    queryKey: ['tasks', 'common', slug],
    queryFn: () => getTasks(`?type=${TaskTypes.Common}&complexity=${slug}`),
  });

  const errorMessage = error?.message || (data && 'message' in data && data.message) || '';

  return (
    <PageWrapper title={`Common`} supTitle={slug}>
      <AlertLoadingWrapper loading={isPending} message={errorMessage} />
      {data && !('error' in data && data.error) && Array.isArray(data) ? (
        <TasksList rows={filterByComplexity(data, slug || '')} bgColor={primaryColor} />
      ) : null}
    </PageWrapper>
  );
}

export default Difficulty;
