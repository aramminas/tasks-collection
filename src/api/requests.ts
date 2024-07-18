import { fetcherPost, fetcherGet, fetcherPut, fetcherDelete } from '@/api';
import { TaskType } from '@/types';

const getTasks = (query?: string) => {
  return fetcherGet(`tasks`, query);
};

const createTasks = (data: Omit<TaskType, '_id'>) => {
  return fetcherPost(`tasks`, data);
};

const updateTasks = (data: TaskType) => {
  return fetcherPut(`tasks`, data);
};

const deleteTasks = (id: string) => {
  return fetcherDelete(`tasks`, id);
};

export { getTasks, createTasks, updateTasks, deleteTasks };
