import { Link } from 'react-router-dom';

import { greenGrey } from '@/constants';

function TaskLink() {
  return (
    <Link to="tasks" style={{ textDecoration: 'none', color: greenGrey, cursor: 'default' }}>
      <sup>&#9882;</sup>
    </Link>
  );
}

export default TaskLink;
