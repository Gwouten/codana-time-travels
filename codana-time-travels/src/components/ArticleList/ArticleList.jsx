import { fetchNews } from '../../http';
import styles from './ArticleList.module.css';
import ArticleListItem from "./ArticleListItem/ArticleListItem";
import { useParams, useRouteLoaderData } from 'react-router-dom';
import dayjs from 'dayjs';

export const loader = async ({ params }) => fetchNews(params.articlesQuery);

export default function ArticleList({ emptyListMessage }) {
    const { articlesQuery } = useParams();
    const date = dayjs(articlesQuery.match(/\d{4}-\d{2}-\d{2}/g)).format('DD/MM/YYYY');
    const { articles = [] } = useRouteLoaderData('articles');
    
    return (
        <section className={styles.articleList}>
            <h2 className={styles.listTitle}>
                <span className={styles.light}>Articles published on</span><br/>
                {date}
            </h2>
            { 
                !articles.length && <p className={styles.loading}>{emptyListMessage}</p>
            }
            <ul className={styles.list}>
            {
                articles.map((article, index) => {
                    return (
                        <ArticleListItem
                            key={article.title+index}
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
        