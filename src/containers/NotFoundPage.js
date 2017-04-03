import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <h4>
        404
      </h4>
      <Link to="/"> 回到首页  </Link>
    </div>
  );
};

export default NotFoundPage;
