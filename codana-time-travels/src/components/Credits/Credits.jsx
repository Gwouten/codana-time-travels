import styles from './Credits.module.css';

export default function Credits({ source, author }) {
    return (
        <section className={styles.credits}>
            <p className={styles.sourceLabel}>Provided by <span className={styles.source}>{source}</span></p>    
            { author && <p className={styles.sourceLabel}>Written by <span className={styles.source}>{author}</span></p> }
        </section>
        );
    };
    