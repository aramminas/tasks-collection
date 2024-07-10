import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

import Home from '@/pages/Home';
import Common from '@/pages/Common';
import Logical from '@/pages/Logical';
import Favorites from '@/pages/Favorites';
import CommonDifficulty from '@/pages/Common/subPages/Difficulty';
import LogicalDifficulty from '@/pages/Logical/subPages/Difficulty';
import FavoritesDifficulty from '@/pages/Favorites/subPages/Difficulty';

// Task route
import Task from '@/pages/Task';
import CreateTask from '@/pages/Task/CreateTask';
import NotSelectedTask from '@/pages/Task/NotSelectedTask';

import { Difficulties, RouteItems } from '@/types';

export const routeItems: RouteItems = [
  {
    path: '/',
    name: 'Home',
    index: true,
    element: <Home />,
    icon: <HomeOutlinedIcon />,
    subRoutes: [],
  },
  {
    path: '/common',
    name: 'Common',
    element: <Common />,
    icon: <AssignmentTurnedInOutlinedIcon />,
    subRoutes: [
      {
        path: ':slug',
        name: '',
        element: <CommonDifficulty />,
        difficulties: [Difficulties.easy],
      },
    ],
  },
  {
    path: '/logical',
    name: 'Logical',
    element: <Logical />,
    icon: <PsychologyOutlinedIcon />,
    subRoutes: [
      {
        path: ':slug',
        name: '',
        element: <LogicalDifficulty />,
        difficulties: [Difficulties.easy, Difficulties.medium],
      },
    ],
  },
  {
    path: '/favorites',
    name: 'Favorites',
    element: <Favorites />,
    icon: <FavoriteBorderIcon />,
    subRoutes: [
      {
        path: ':slug',
        name: '',
        element: <FavoritesDifficulty />,
        difficulties: [Difficulties.easy, Difficulties.medium, Difficulties.hard],
      },
    ],
  },
];

export const taskRouteItems: RouteItems = [
  {
    path: '/task',
    name: 'Task',
    index: true,
    element: <NotSelectedTask />,
    subRoutes: [
      {
        path: ':id',
        name: '',
        element: <Task />,
      },
      {
        path: 'create',
        name: '',
        element: <CreateTask />,
      },
    ],
  },
];
