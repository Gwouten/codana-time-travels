import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import TimeTravelDestination from "../Forms/TimeTravelDestination/TimeTravelDestination";

import { today } from "../../helpers";
import styles from './Root.module.css';

export default function Root() {
    const [formIsOpen, setFormIsOpen] = useState(true)
    const navigate = useNavigate();

    const handleSubmitUserInput = (value, queryParams) => {
        setFormIsOpen(value);
        if (queryParams) {
            navigate(`articles/${queryParams}`);
        }
    };

    return (
        <section className={styles.root}>
            <Header title="Codana Time Travels"></Header>
            <TimeTravelDestination today={today} formIsOpen={formIsOpen} onSubmitUserInput={handleSubmitUserInput} />
            <Outlet context={[formIsOpen, setFormIsOpen]}/>
        </section>
    );
};
