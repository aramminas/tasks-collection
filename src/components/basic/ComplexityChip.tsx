import Chip from '@mui/material/Chip';

import { Difficulties } from '@/types';
import { getComplexityColor } from '@/helpers';

interface ComplexityChipProps {
  complexity?: Difficulties;
}

const ComplexityChip = ({ complexity }: ComplexityChipProps) => {
  return <Chip label={complexity} color={getComplexityColor(complexity)} />;
};

export default ComplexityChip;
