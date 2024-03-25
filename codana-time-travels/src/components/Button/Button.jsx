import styles from './Button.module.css';

export default function({mode, children, type}) {
    let classes = styles.button;

    if (mode === 'secondary') {
        classes += ' '+styles.secondary
    }

    return (
        <button className={classes} type={type}>{children}</button>
    );
};
