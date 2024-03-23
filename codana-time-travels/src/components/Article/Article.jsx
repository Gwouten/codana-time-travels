import styles from './Article.module.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { fetchArticle } from '../../http';
import Credits from '../Credits/Credits';

export const loader = async ({ request, params}) => {
    return fetchArticle(params.articleTitle);
};

export default function Article() {
    const {articles} = useLoaderData();
    const { author, content, publishedAt, source, title, url, urlToImage } = articles[0];

    return (
        <>
            <Link to=".." className={styles.link}>&lt; Back</Link>
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
