import styles from './Header.module.css';
import TimeIn from '../svg/TimeIn';
import TimeOut from '../svg/TimeOut';

export default function Header ({ title }) {
    return (
        <header className={styles.header}>
            <TimeIn />
            <h1>{title}<span className={styles.cursor}>_</span></h1>
            <TimeOut height="2rem" />
        </header>
    );
};
