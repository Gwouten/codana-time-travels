import { useNavigate } from "react-router-dom";

import UserInput from "../Inputs/UserInput";
import Button from "../../Button/Button";
import UserSelect from "../Inputs/UserSelect";
import { languages } from '../../../requestOptions';
import dayjs from 'dayjs';

import styles from './TimeTravelDestination.module.css';
import { useState } from "react";

export default function TimeTravelDestination({today = dayjs()}) {
    const [formIsOpen, setFormIsOpen] = useState(true)
    const navigate = useNavigate();

    const minDate = today.subtract(1, 'month').format('YYYY-MM-DD');
    const maxDate = today.format('YYYY-MM-DD');

    let formWrapperStyles = styles.formWrapper;
    if (formIsOpen) {
        formWrapperStyles += ' '+styles.active;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const {query, date, language} = Object.fromEntries(formData.entries());
        const queryParams = `q=${query.toLowerCase()}&language=${language}&from=${date}&to=${date}`; // Too many request, need to use localStorage query
        // const queryParams = `q=${query}&from=${date}`;
        navigate(`articles/${queryParams}`); // Maybe use redirect?
    };

    const handleCloseClick = (event) => {
        event.preventDefault();
        setFormIsOpen((prevState) => !prevState);
    };

    return (
        <section className={formWrapperStyles}>
            <h2 className={styles.formTitle}><span>Where</span> When would you like to go?</h2>
            <form className={styles.form} onSubmit={handleSubmit} mode="close">
                <UserInput label="Search for" type="text" required />    
                <UserInput label="Date" type="date" min={minDate} max={maxDate} required />
                <UserSelect label="Language" options={languages} />
                <section className={styles.actions}>
                    <Button type="submit" mode="dark">Submit</Button>
                    <Button type="reset" mode="dark">Reset!</Button>
                </section>
                <Button mode="dark">Surprise me</Button>
                <Button onClick={handleCloseClick} mode="close">&#x2573;</Button>
            </form>
            <Button onClick={handleCloseClick} mode="open">&#x2192;</Button>
        </section>
        );
    };
    