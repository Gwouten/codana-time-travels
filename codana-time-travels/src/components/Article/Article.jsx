import styles from './Article.module.css';
import { Link, useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import Credits from '../Credits/Credits';

export default function Article() {
    const { articles } = useLoaderData();
    const { articleTitle } = useParams();
    const {
        author, 
        content, 
        source, 
        title, 
        url, 
        urlToImage 
    } = articles.find((article) => article.title === articleTitle);
    const [formIsOpen, setFormIsOpen] = useOutletContext()

    let articleStyles = styles.article;
    if (formIsOpen) {
        articleStyles += ' '+styles.blur;
    }

    return (
        <>
            <article className={articleStyles}>
                <h1 className={styles.title}>{title}</h1>
                <section className={styles.credits}>
                    <Credits source={source.name} author={author} />
                </section>
                <img src={urlToImage} />
                <main>{content}</main>
                <section className={styles.actions}>
                    <a href={url}>Read full article here</a>
                    <Link to=".." className={styles.link} relative="path">&lt; Back</Link>
                </section>
            </article>
        </>
    );
};
