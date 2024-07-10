import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import FolderOffOutlinedIcon from '@mui/icons-material/FolderOffOutlined';

import { RouteItem } from '@/types';
import { primaryColor } from '@/constants';
import { difficultiesMap } from '@/helpers/difficultiesMap';
import { combineDifficulties, getCurrentPath } from '@/helpers';

interface MainListItemsProps {
  pathname: string;
}

const MainListItems = ({ pathname }: MainListItemsProps) => {
  const currentPath: RouteItem | undefined = getCurrentPath(pathname);

  if (currentPath && currentPath.subRoutes) {
    const difficulties = combineDifficulties(currentPath.subRoutes);
    if (difficulties.length) {
      return (
        <List component="nav">
          {difficulties.map((item) => (
            <ListItemButton
              key={item}
              to={`${currentPath.path}/${item}`}
              component={Link}
              selected={pathname !== '/' && pathname.includes(item)}
            >
              <ListItemIcon sx={{ color: primaryColor }}>{difficultiesMap[item]}</ListItemIcon>
              <ListItemText primary={item} sx={{ textTransform: 'capitalize' }} />
            </ListItemButton>
          ))}
        </List>
      );
    }
  }

  return (
    <List component="nav">
      <ListItemButton to="" component={Link}>
        <ListItemIcon>
          <FolderOffOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="No data!" />
      </ListItemButton>
    </List>
  );
};

export default MainListItems;
