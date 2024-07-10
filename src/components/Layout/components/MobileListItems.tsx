import { Link } from 'react-router-dom';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';

import { checkPaths } from '@/helpers';
import { primaryColor } from '@/constants';
import { routeItems } from '@/components/Layout/routeMap';

interface MobileListItemsProps {
  pathname: string;
}

const MobileListItems = ({ pathname }: MobileListItemsProps) => (
  <>
    <ListSubheader component="div" inset>
      Navbar
    </ListSubheader>
    {routeItems.map((route) => {
      const isSelected = checkPaths(pathname, route.path);

      return (
        <ListItemButton key={route.name} component={Link} to={route.path} selected={isSelected}>
          <ListItemIcon sx={{ color: primaryColor }}>{route.icon}</ListItemIcon>
          <ListItemText primary={route.name} />
        </ListItemButton>
      );
    })}
  </>
);

export default MobileListItems;
