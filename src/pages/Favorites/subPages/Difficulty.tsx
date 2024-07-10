import { useParams } from 'react-router-dom';

import PageWrapper from '@/components/PageWrapper';

function Difficulty() {
  const { slug } = useParams();

  return (
    <PageWrapper title="Favorites" supTitle={slug}>
      <div>Favorites Difficulty - {slug}</div>
    </PageWrapper>
  );
}

export default Difficulty;
