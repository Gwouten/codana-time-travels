import { useNavigate } from "react-router-dom";

import UserInput from "../Inputs/UserInput";
import Button from "../../Button/Button";
import UserSelect from "../Inputs/UserSelect";
import { languages } from '../../../requestOptions';
import dayjs from 'dayjs';

import styles from './TimeTravelDestination.module.css';

export default function TimeTravelDestination({today = dayjs()}) {
    const navigate = useNavigate();

    const minDate = today.subtract(1, 'month').format('YYYY-MM-DD');
    const maxDate = today.format('YYYY-MM-DD');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const {query, date, language} = Object.fromEntries(formData.entries());
        const queryParams = `q=${query.toLowerCase()}&language=${language}&from=${date}&to=${date}`; // Too many request, need to use localStorage query
        // const queryParams = `q=${query}&from=${date}`;
        navigate(`articles/${queryParams}`);
    };

    return (
        <>
            <h2>When would you like to go?</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <UserInput label="Query" type="text" required />    
                <UserInput label="Date" type="date" min={minDate} max={maxDate} required />
                <UserSelect label="Language" options={languages} />
                <section>
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset!</Button>
                </section>
                <Button mode="secondary">Surprise me</Button>
            </form>
        </>
        );
    };
    