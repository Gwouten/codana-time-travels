import styles from './Article.module.css';
import { Link, useParams, useRouteLoaderData } from 'react-router-dom';
import Credits from '../Credits/Credits';

export default function Article() {
    const { articles } = useRouteLoaderData('articles');
    const { articleTitle } = useParams();
    const {
        author, 
        content, 
        publishedAt, 
        source, 
        title, 
        url, 
        urlToImage 
    } = articles.find((article) => article.title === articleTitle);

    return (
        <>
            <Link to=".." className={styles.link} relative="path">&lt; Back</Link>
            <article className={styles.article}>
                <h1 className={styles.title}>{title}</h1>
                <Credits source={source.name} author={author} />
                <img src={urlToImage} />
                <main>{content}</main>
                <a href={url}>Read full article here</a>
            </article>
        </>
    );
};
