import { convertToSnakeCase } from "../../../helpers";
import styles from './Inputs.module.css';

export default function UserInput({label, ...props}) {
    return (
        <div className={styles.inputGroup}>
            <label htmlFor={label}>{label}{props.required && <sup className={styles.required}>*</sup>}</label>
            <input id={label} name={convertToSnakeCase(label)} {...props} />
        </div>
    );
};
