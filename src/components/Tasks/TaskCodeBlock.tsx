import { ReactNode } from 'react';

interface TaskCodeBlockProps {
  children: ReactNode;
  isBlur?: boolean;
}

function TaskCodeBlock({ children, isBlur }: TaskCodeBlockProps) {
  return (
    <div
      style={{
        padding: '10px',
        overflow: 'auto',
        borderRadius: '6px',
        border: '1px solid grey',
        backgroundColor: '#320023',
        color: isBlur ? 'transparent' : '#ffffff',
        textShadow: isBlur ? '0 0 12px rgba(0,0,0,0.5)' : 'initial',
      }}
    >
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default TaskCodeBlock;
