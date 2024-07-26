import { ReactNode, useState } from 'react';
import toast from 'react-hot-toast';

import CodeFullScreenDialog from '@/components/basic/CodeFullScreenDialog';

interface CodeWrapperProps {
  children: ReactNode;
  isBlur?: boolean;
  code?: string;
}

const CodeWrapper = ({ children, isBlur, code }: CodeWrapperProps) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    if (isBlur) {
      toast('⚠️ First, you need to show the answers');
      return;
    }

    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div onDoubleClick={() => handleToggle()}>{children}</div>
      <CodeFullScreenDialog open={open} code={code} onClose={handleToggle}>
        {children}
      </CodeFullScreenDialog>
    </>
  );
};

export default CodeWrapper;
