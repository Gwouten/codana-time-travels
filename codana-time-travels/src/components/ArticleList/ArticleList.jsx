import { fetchNews } from '../../http';
import styles from './ArticleList.module.css';
import ArticleListItem from "./ArticleListItem/ArticleListItem";
import { Link, useLoaderData } from 'react-router-dom';

const today = new Date('2024-02-25');
const INITIAL_PARAMETERS = `q=trump&from=${today.toISOString()}`;

export const loader = async () => fetchNews(INITIAL_PARAMETERS);

export default function ArticleList({ emptyListMessage, date }) {
    const {totalResults, articles = []} = useLoaderData();
    
    if (!articles.length) {
        return <p className={styles.loading}>{emptyListMessage}</p>
    }
    
    return (
        <section className={styles.articleList}>
        <h2 className={styles.listTitle}>
        <span className={styles.light}>Articles published on</span><br/>
        {date}
        </h2>
        <ul className={styles.list}>
        {
            articles.map((article, index) => {
                return (
                    <ArticleListItem
                    key={article.title}
                    title={article.title}
                    description={article.description}
                    imgurl={article.urlToImage} 
                    source={article.source.name}
                    author={article.author}
                    />
                    );
                })
            }
            </ul>
            </section>
            );
        };
        