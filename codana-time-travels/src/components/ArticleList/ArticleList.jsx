import styles from './ArticleList.module.css';
import ArticleListItem from "./ArticleListItem/ArticleListItem";

export default function ArticleList({ articles, date, isLoading, loadingMessage }) {
    if (isLoading) {
        return <p className={styles.loading} >{loadingMessage}</p>;
    }

    return (
        <section className={styles.articleList}>
            <h2 className={styles.listTitle}>
                <span className={styles.light}>Articles published on</span><br/>
                {date}
            </h2>
            <ul className={styles.list}>
            {
                articles.map((article) => {
                    return (
                        <li key={article.source.id+article.publishedAt+article.author}>
                            <ArticleListItem
                                title={article.title}
                                description={article.description}
                            />
                        </li>
                    );
                })
            }
            </ul>
        </section>
    );
};
