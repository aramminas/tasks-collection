import Box from '@mui/material/Box';

import { TaskType } from '@/types';
import TypesChip from '@/components/basic/TypesChip';
import FavoriteTag from '@/components/basic/FavoriteTag';
import ComplexityChip from '@/components/basic/ComplexityChip';

interface TaskInfoBlockProps {
  task: TaskType;
}
function TaskInfoBlock({ task }: TaskInfoBlockProps) {
  return (
    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
      <TypesChip type={task.type} />
      <ComplexityChip complexity={task.complexity} />
      <FavoriteTag favorite={task.favorite} />
    </Box>
  );
}

export default TaskInfoBlock;
