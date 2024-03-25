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
    children: [
      {
        path: 'articles',
        id: 'articles',
        loader: allArticlesLoader,
        children: [
          {
            index: true,
            path: ':articlesQuery',
            element: <ArticleList />,
          },
          {
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
