import { useParams } from 'react-router-dom';

import PageWrapper from '@/components/PageWrapper';

function Difficulty() {
  const { slug } = useParams();

  return (
    <PageWrapper title={`Common`} supTitle={slug}>
      <div>Common Difficulty - {slug}</div>
    </PageWrapper>
  );
}

export default Difficulty;
