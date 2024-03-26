import { Link } from 'react-router-dom';
import styles from './ArticleListItem.module.css';
import Credits from '../../Credits/Credits';

export default function ArticleListItem({ title, description, imgurl, source, author }) {
    let titleStyles = styles.title;
    if (!imgurl) {
        titleStyles += ' '+styles.fullWidthTitle
    }

    return (
        <li className={styles.listItem}>
            <Link to={title}>
                <article className={styles.article}>
                    {imgurl && <img src={imgurl} className={styles.img} />}
                    <Credits source={source} author={author} />
                    <h3 className={titleStyles}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </article>
            </Link>
        </li>
    );
};
