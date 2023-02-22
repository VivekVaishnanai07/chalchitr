import React from 'react';
import { useRoutes } from 'react-router-dom';
import { PUBLIC_ROUTES } from './configs/routes';
import './assets/css/shared.scss';

const App: React.FC = (props) => {
  const routes = useRoutes(PUBLIC_ROUTES);

  return routes;
};

export default App;
