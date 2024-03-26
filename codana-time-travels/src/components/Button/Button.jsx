import styles from './Button.module.css';

export default function({mode, children, type, hide = false, ...props}) {
    let classes = styles.button;

    if (mode === 'dark') {
        classes += ' '+styles.dark;
    }

    if (mode === 'close') {
        classes += ' '+styles.close;
    }

    if (mode === 'open') {
        classes += ' '+styles.open;
    }

    if (hide) {
        classes += ' '+styles.hide;
    }

    return (
        <button className={classes} type={type} onClick={props.onClick}>{children}</button>
    );
};
