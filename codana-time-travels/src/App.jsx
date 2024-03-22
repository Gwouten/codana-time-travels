import { useEffect, useState } from 'react'
import { fetchNews } from './http';
import { dummyData } from './dummy-data';

import './App.css'

import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
import { convertDateToDdMmYyyy } from './helpers';

const today = new Date('2024-02-25');
const INITIAL_PARAMETERS = `q=trump&from=${today.toISOString()}`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState();
  const [parameters, setParameters] = useState(INITIAL_PARAMETERS);

  const getArticles = async (parameters) => {
    setIsLoading(true);

    try {
      const fetchedArticles = await fetchNews(parameters);
      setArticles(fetchedArticles.articles);
    } catch (error) {
      setError(error.message);
      // load dummy articles for when you reach your request limit => ADD CACHING!!
      setArticles(dummyData.articles);
    }

    setIsLoading(false);
  };

  const handleFetchArticlesButton = () => {
    // params will be set by the UserInput component
    const newParameters = `q=trump&from=${today}`;
    setParameters((prevParamters) => {
      if (newParameters === prevParamters) {
        return;
      }

      getArticles(newParameters);
    });
  };

  useEffect(() => {
    // rename params to userInput
    getArticles(parameters);
  }, []);

  return (
    <>
      <Header title="Codana Time Travels"></Header>

      {/* <button onClick={handleFetchArticlesButton}>Fetch news</button> */}
      <ArticleList
        articles={articles}
        date={convertDateToDdMmYyyy(today)}
        isLoading={isLoading}
        loadingMessage="Travelling through time..."
      />
      { error && <p>{error}</p> }
    </>
  )
}

export default App
