import { useParams } from 'react-router-dom';

import PageWrapper from '@/components/PageWrapper';

function Difficulty() {
  const { slug } = useParams();

  return (
    <PageWrapper title="Logical" supTitle={slug}>
      <div>Logical Difficulty - {slug}</div>
    </PageWrapper>
  );
}

export default Difficulty;
