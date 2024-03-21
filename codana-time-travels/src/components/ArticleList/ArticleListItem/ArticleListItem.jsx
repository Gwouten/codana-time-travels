import styles from './ArticleListItem.module.css';

export default function ArticleListItem({ title, description }) {
    return (
        <article className={styles.article}>
            <header>
                <h3 className={styles.title}>{title}</h3>
            </header>
            <p className={styles.description}>{description}</p>
        </article>
    );
};
