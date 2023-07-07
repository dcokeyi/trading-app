import React from "react";
import { AccountHeader, Overview } from "../../../components";
import { Route, Routes } from "react-router-dom";

export const AccountsView = () => {
    return (
        <>
            <AccountHeader/>
            <Routes>
                <Route path="overview" element={<Overview/>} />
            </Routes>
        </>
    );
}