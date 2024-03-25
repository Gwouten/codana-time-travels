import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import TimeTravelDestination from "../Forms/TimeTravelDestination/TimeTravelDestination";

import { today } from "../../helpers";

export default function Root() {
    return (
        <>
            <Header title="Codana Time Travels"></Header>
            <TimeTravelDestination today={today} />
            <Outlet />
        </>
    );
};
