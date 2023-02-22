import React from 'react';
import { Navigate } from 'react-router-dom';

const LandingPage: React.FC = (props) => {
  return (
    <>
      <Navigate to={'/collections'} />
    </>
  );
};

export default LandingPage;
