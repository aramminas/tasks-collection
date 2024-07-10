import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { checkPaths } from '@/helpers';
import { routeItems } from '@/components/Layout/routeMap';

interface SiteNavProps {
  pathname: string;
}

const SiteNav = ({ pathname }: SiteNavProps) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: '10%' }}>
      {routeItems.map((route) => {
        const isSelected = checkPaths(pathname, route.path);

        return (
          <Link key={route.name} to={route.path} style={{ textDecoration: 'none' }}>
            <MenuItem sx={{ py: '6px', px: '12px' }} selected={isSelected}>
              <Typography
                variant="body2"
                color="white"
                sx={{ fontWeight: isSelected ? 'bolder' : 'initial' }}
              >
                {route.name}
              </Typography>
            </MenuItem>
          </Link>
        );
      })}
    </Box>
  );
};

export default SiteNav;
