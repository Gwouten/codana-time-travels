import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchNews } from './http';
import { dummyData } from './dummy-data';

import './App.css'

import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
import Article from './components/Article/Article';
import { convertDateToDdMmYyyy } from './helpers';
import Root from './components/Root/Root';

const today = new Date('2024-02-25');
const INITIAL_PARAMETERS = `q=trump&from=${today.toISOString()}`;
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ArticleList emptyListMessage="Such empty..." date={convertDateToDdMmYyyy(today)}/>,
        loader: async () => {
          const articles = await fetchNews(INITIAL_PARAMETERS);
          return articles;
        }
      },
      {
        path: 'article/:articleId',
        element: <Article />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
