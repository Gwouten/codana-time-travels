import styles from './ArticleList.module.css';
import ArticleListItem from "./ArticleListItem/ArticleListItem";
import { Link, useLoaderData } from 'react-router-dom';

export default function ArticleList({ emptyListMessage, date }) {
    const {totalResults, articles} = useLoaderData();

    console.log(totalResults);
    console.log(articles);
     
    // if (!articles.length) {
    //     return <p className={styles.loading}>{emptyListMessage}</p>
    // }

    return (
        <section className={styles.articleList}>
            <Link to="/article/">Go to article</Link>
            <h2 className={styles.listTitle}>
                <span className={styles.light}>Articles published on</span><br/>
                {date}
            </h2>
            <ul className={styles.list}>
            {
                articles.map((article) => {
                    console.log(article);
                    return (
                        <ArticleListItem
                            key={article.source.id+article.publishedAt+article.author}
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
