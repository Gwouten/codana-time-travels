import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Root() {
    return (
        <>
            <Header title="Codana Time Travels"></Header>
            <Outlet/>
            {/* { error && <p>{error}</p> } */}
        </>
    );
};
