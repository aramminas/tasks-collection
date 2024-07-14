import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { TaskType } from '@/types';
import { getTasks } from '@/api/requests';
import { primaryColor } from '@/constants';
import PageWrapper from '@/components/PageWrapper';
import TasksList from '@/components/Tasks/TasksList';
import AlertLoadingWrapper from '@/components/basic/AlertLoadingWrapper';

function Difficulty() {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery<TaskType[]>({
    queryKey: ['tasks', 'favorites', slug],
    queryFn: () => getTasks(`?favorite=${true}&complexity=${slug}`),
  });

  const taskData: TaskType[] = (data || []).filter((task) => task.complexity === slug);

  return (
    <PageWrapper title="Favorites" supTitle={slug}>
      <AlertLoadingWrapper loading={isPending} message={error ? error.message || '' : ''} />
      <TasksList rows={taskData || []} bgColor={primaryColor} />
    </PageWrapper>
  );
}

export default Difficulty;
