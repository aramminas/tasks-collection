import ScrollbarWrapper from '@/components/basic/ScrollbarWrapper';

interface CodeBlockProps {
  code: string;
}

function CodeBlock({ code }: CodeBlockProps) {
  return (
    <ScrollbarWrapper>
      <pre>
        <code>{code}</code>
      </pre>
    </ScrollbarWrapper>
  );
}

export default CodeBlock;
