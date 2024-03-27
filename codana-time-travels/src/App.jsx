import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import Article from './components/Article/Article';
import Root from './components/Root/Root';
import ArticleList, { loader as allArticlesLoader } from './components/ArticleList/ArticleList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    loader: allArticlesLoader,
    children: [
      {
        path: 'articles',
        children: [
          {
            index: true,
            loader: allArticlesLoader,
            path: ':articlesQuery',
            element: <ArticleList />,
          },
          {
            loader: allArticlesLoader,
            path: ':articlesQuery/:articleTitle',
            element: <Article />,
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
  )
}

export default App
