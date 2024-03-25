import { convertToSnakeCase } from "../../../helpers";
import styles from './Inputs.module.css';

export default function UserSelect({label, options, ...props}) {
    return (
        <div>
            <label htmlFor={label}>{label}{props.required && <sup className={styles.required}>*</sup>}</label>
            <select name={convertToSnakeCase(label)} id={label}>
            {
                options.map((option) => <option value={option} key={option}>{option}</option>)
            }
            </select>
        </div>
        );
    };
    