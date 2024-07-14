import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '@/pages/Home/styles.css';
import { appName } from '@/constants';
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
          tasks for different technologies
        </Typography>
        <Typography variant="h4" className="main-title to-left">
          and difficulties
        </Typography>
      </Box>
      <Typography variant="h4" className="secondary-title">
        Choose a task and try to solve it
        <br /> in an original way
      </Typography>
      <Link to="/common" style={{ textDecoration: 'none' }}>
        <Button>Go To Tasks</Button>
      </Link>
      <Canvas ref={bannerRef} />
    </Box>
  );
}

export default Home;
