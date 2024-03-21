import { useEffect, useState } from 'react'
import { fetchNews } from './http';
import './App.css'

const today = new Date().toISOString();
const INITIAL_PARAMETERS = `from=${today}`;

function App() {
  // state for http calls
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
      <h1>Codana Time Travels</h1>
      <button onClick={handleFetchArticlesButton}>Fetch news</button>
      { isLoading && <p>Travelling through time...</p>}
      {
        articles.map(({ author, content, description, publishedAt, source, title, url, urlToImage }) => {
          return (
            <article key={source.id+publishedAt+author}>
              <img src={urlToImage} alt={description} />
              <header>{title}</header>
            </article>
          );
        })
      }
      { error && <p>{error}</p> }
    </>
  )
}

export default App
