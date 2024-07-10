import { useRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { appName } from '@/constants';

import '@/pages/Home/styles.css';

import Canvas from '@/components/basic/Canvas';

function Home() {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box ref={bannerRef} className="banner">
      <Typography className="site-name" variant="h6">
        {appName}
      </Typography>
      <Box>
        <Typography variant="h2" className="main-title to-left">
          Here are collected different
        </Typography>
        <Typography variant="h3" className="main-title to-right">
          tasks on different technologies
        </Typography>
        <Typography variant="h4" className="main-title to-left">
          and difficulties
        </Typography>
      </Box>
      <Typography variant="h4" className="secondary-title">
        Choose a task and try to solve it
        <br /> in an original way
      </Typography>
      <Canvas ref={bannerRef} />
    </Box>
  );
}

export default Home;
