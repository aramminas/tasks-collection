import { textColors } from '@/constants';
import { routeItems } from '@/components/Layout/routeMap';

import { Difficulties, DifficultyLevels, RouteSubItemType, TaskTypes } from '@/types';

export const combineDifficulties = (subRoutes: RouteSubItemType[]) => {
  const difficulties: DifficultyLevels[] = [];
  subRoutes.forEach((subRoute) => {
    if (subRoute.difficulties) {
      difficulties.push(...subRoute.difficulties);
    }
  });

  return [...new Set(difficulties)];
};

export const getCurrentPath = (pathname: string) => {
  return routeItems.find((item) => {
    return pathname === item.path || checkPaths(pathname, item.path);
  });
};

export const checkPaths = (pathname: string, routePath: string) => {
  const path = pathname.split('/');
  const route = routePath.split('/');

  return path[1] === route[1];
};

export const getSupTitleColor = (type: Difficulties) => {
  switch (type) {
    case Difficulties.easy:
      return textColors['text.secondary'];
    case Difficulties.medium:
      return textColors['warning.main'];
    case Difficulties.hard:
      return textColors['error.main'];
    case Difficulties.extraHard:
      return textColors['secondary.main'];
    default:
      return textColors['text.primary'];
  }
};

export const getTypeColor = (type?: TaskTypes) => {
  switch (type) {
    case TaskTypes.Common:
      return 'default';
    case TaskTypes.Logical:
      return 'primary';
    default:
      return 'default';
  }
};

export const getComplexityColor = (complexity?: Difficulties) => {
  switch (complexity) {
    case Difficulties.easy:
      return 'default';
    case Difficulties.medium:
      return 'warning';
    case Difficulties.hard:
      return 'error';
    case Difficulties.extraHard:
      return 'secondary';
    default:
      return 'default';
  }
};
