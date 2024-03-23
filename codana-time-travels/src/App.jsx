import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import ArticleList from './components/ArticleList/ArticleList';
import Article from './components/Article/Article';
import Root from './components/Root/Root';
import { loader as allArticlesLoader } from './components/ArticleList/ArticleList';
import { loader as singleArticleLoader } from './components/Article/Article';
import { convertDateToDdMmYyyy } from './helpers';

const today = new Date('2024-02-25');
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ArticleList emptyListMessage="Such empty..." date={convertDateToDdMmYyyy(today)}/>,
        loader: allArticlesLoader
      },
      {
        path: 'article/:articleTitle',
        element: <Article />,
        loader: singleArticleLoader
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
