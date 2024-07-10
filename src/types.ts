type RouteItemType = {
  name: string;
  path: string;
  icon?: JSX.Element;
  element: JSX.Element;
};

export type RouteItem = {
  index?: boolean;
  subRoutes: RouteSubItemType[];
} & RouteItemType;

export type RouteSubItemType = {
  difficulties?: DifficultyLevels[];
} & RouteItemType;

export enum Difficulties {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
  extraHard = 'extraHard',
}

export type DifficultyLevels = Difficulties.easy | Difficulties.medium | Difficulties.hard;

export type RouteItems = RouteItem[];

export type DotsType = {
  x: number;
  y: number;
  size: number;
  color: string;
};
