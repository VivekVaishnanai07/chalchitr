import React from 'react';
import TopBar from '../page-layout/header';
import Styles from './private-router.module.scss';

const PrivateRouter: React.FC = (props) => {
  return (
    <div className={Styles['main-wrapper']}>
      <div className={Styles['maincontent-wrapper']}>
        <TopBar />
      </div>
    </div>
  );
};

export default PrivateRouter;
