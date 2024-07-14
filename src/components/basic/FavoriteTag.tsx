import Zoom from '@mui/material/Zoom';
import Tooltip from '@mui/material/Tooltip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { primaryColor } from '@/constants';

interface FavoriteTagProps {
  favorite?: boolean;
}

function FavoriteTag({ favorite }: FavoriteTagProps) {
  return (
    <Tooltip
      arrow
      placement="top"
      TransitionComponent={Zoom}
      title={favorite ? 'Favorite' : 'Not Favorite'}
    >
      {favorite ? <FavoriteIcon htmlColor={primaryColor} /> : <FavoriteBorderIcon />}
    </Tooltip>
  );
}

export default FavoriteTag;
