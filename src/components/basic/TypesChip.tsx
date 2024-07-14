import Chip from '@mui/material/Chip';

import { TaskTypes } from '@/types';
import { getTypeColor } from '@/helpers';

interface TypesChipProps {
  type?: TaskTypes;
}

const TypesChip = ({ type }: TypesChipProps) => {
  return <Chip label={type} color={getTypeColor(type)} variant="outlined" />;
};

export default TypesChip;
