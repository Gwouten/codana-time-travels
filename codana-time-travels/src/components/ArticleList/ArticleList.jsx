import { fetchNews } from '../../http';
import styles from './ArticleList.module.css';
import ArticleListItem from "./ArticleListItem/ArticleListItem";
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

export const loader = async ({ params }) => fetchNews(params.articlesQuery);

export default function ArticleList({ emptyListMessage }) {
    const { articlesQuery } = useParams();
    const query = articlesQuery.match(/(q=)(.+)(?=&language)/g)[0].substring(2);
    const date = dayjs(articlesQuery.match(/(\d{4}-\d{2}-\d{2})/g)[0]).format('DD/MM/YYYY');
    const { totalResults, articles = [] } = useLoaderData();
    const [formIsOpen, setFormIsOpen] = useOutletContext()

    let articleListStyles = styles.articleList;
    if (formIsOpen) {
        articleListStyles += ' '+styles.blur;
    }
    
    return (
        <section className={articleListStyles}>
            <h2 className={styles.listTitle}>
                There are <span className={styles.bold}>{totalResults}</span> articles about <span className={styles.bold}>{query}</span> published on<br/>
                <span className={styles.date}>{date}</span>
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
        