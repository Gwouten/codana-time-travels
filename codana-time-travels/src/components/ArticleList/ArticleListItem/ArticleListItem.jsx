import styles from './ArticleListItem.module.css';

export default function ArticleListItem({ title, description, imgurl, source, author }) {
    console.log(imgurl);
    return (
        <li className={styles.listItem}>
            <article className={styles.article}>
                <img src={imgurl} className={styles.img} />
                <section className={styles.credits}>
                    <p className={styles.sourceLabel}>Provided by <span className={styles.source}>{source}</span></p>    
                    { author && <p className={styles.sourceLabel}>Written by <span className={styles.source}>{author}</span></p> }
                </section>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </article>
        </li>
    );
};
