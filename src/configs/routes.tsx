import React from 'react';

const AllCollectionMovieList = React.lazy(
  () => import('../pages/all-collection-movie-list/all-collection-movie-list')
);

const PrivateDashboardLayout = React.lazy(
  () => import('../layout/main-layout/private-router')
);

const AllCategoryMovies = React.lazy(() => import('../pages/all-category-movies/all-category-movies'));

export const PUBLIC_ROUTES = [
  {
    path: '/',
    element: <PrivateDashboardLayout />,
    children: [
      {
        path: '/',
        element: <AllCollectionMovieList />,
      },
      {
        path: 'collections',
        element: <AllCollectionMovieList />,
      },
      {
        path: 'collections/:id',
        element: <AllCategoryMovies />,
      },
      {
        path: '*',
        element: <AllCollectionMovieList />,
      },
    ],
  },
];
