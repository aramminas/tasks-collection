import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Tooltip from '@mui/material/Tooltip';

import CodeBlock from '@/components/basic/CodeBlock';
import NotSpecified from '@/components/basic/NotSpecified';

interface EllipsisTooltipProps {
  text: string;
  isCode?: boolean;
  width: string | number;
}

function EllipsisTooltip({ text, width, isCode }: EllipsisTooltipProps) {
  if (!text) {
    return <NotSpecified />;
  }

  return (
    <Tooltip
      arrow
      placement="top"
      TransitionComponent={Zoom}
      title={isCode ? <CodeBlock code={text} /> : text}
    >
      <Box component="div" style={{ width: width, whiteSpace: 'nowrap' }}>
        <Box
          component="div"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {text}
        </Box>
      </Box>
    </Tooltip>
  );
}

export default EllipsisTooltip;
