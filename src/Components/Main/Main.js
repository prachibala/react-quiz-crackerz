import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../Header/HeaderNav";

const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
