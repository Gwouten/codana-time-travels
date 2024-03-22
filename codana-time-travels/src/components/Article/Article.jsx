import styles from './Article.module.css';
import { Link, useParams } from 'react-router-dom';

export default function Article() {
    const {articleId} = useParams();

    console.log(articleId);
    return (
        <>
            <article>Article {articleId}</article>
            <Link to="/">Go to list</Link>
        </>
    );
};
