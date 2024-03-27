import { useNavigate } from "react-router-dom";

import UserInput from "../Inputs/UserInput";
import Button from "../../Button/Button";
import UserSelect from "../Inputs/UserSelect";
import { languages } from '../../../requestOptions';
import dayjs from 'dayjs';

import styles from './TimeTravelDestination.module.css';

export default function TimeTravelDestination({today = dayjs(), formIsOpen, onSubmitUserInput}) {
    const minDate = today.subtract(1, 'month').format('YYYY-MM-DD');
    const maxDate = today.format('YYYY-MM-DD');

    let formWrapperStyles = styles.formWrapper;
    if (formIsOpen) {
        formWrapperStyles += ' '+styles.active;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const {search_for, date, language} = Object.fromEntries(formData.entries());
        const queryParams = `q=${search_for}&language=${language}&from=${date}&to=${date}`;
        onSubmitUserInput(false, queryParams);
    };

    const handleCloseClick = (event) => {
        event.preventDefault();
        onSubmitUserInput(false);
    };

    const handleOpenClick = () => {
        onSubmitUserInput(true);
    }

    return (
        <>
            <Button onClick={handleOpenClick} mode="open" hide={formIsOpen}>&#x2192;</Button>
            <section className={formWrapperStyles}>
                <h2 className={styles.formTitle}><span>Where</span> When would you like to go?</h2>
                <form className={styles.form} onSubmit={handleSubmit} mode="close">
                    <section className={styles.inputs}>
                        <UserInput label="Search for" type="text" required />    
                        <UserInput label="Date" type="date" min={minDate} max={maxDate} required />
                        <UserSelect label="Language" options={languages} />
                    </section>
                    <section className={styles.actions}>
                        <Button type="submit" mode="dark">Submit</Button>
                        <Button type="reset" mode="dark">Reset!</Button>
                    </section>
                    <section className={styles.random}>
                        <Button mode="dark">Surprise me</Button>
                    </section>
                    <section className={styles.close}>
                        <Button onClick={handleCloseClick} mode="close">&#x2573;</Button>
                    </section>
                </form>
            </section>
        </>
        );
    };
    