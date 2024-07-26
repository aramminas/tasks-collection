import Divider from '@mui/material/Divider';

interface TitleDividerProps {
  mb?: number | string;
  mt?: number | string;
}

function TitleDivider({ mb = 2, mt = 1 }: TitleDividerProps) {
  return <Divider variant="middle" sx={{ mb, mt }} />;
}

export default TitleDivider;
