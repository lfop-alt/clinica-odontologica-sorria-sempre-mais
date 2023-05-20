import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import PrivateRoute from "./privateRouter";
import Dashboard from "../pages/Dashboard";
import Agendamento from "../pages/Agendamento";

export default function AplicationRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        // <PrivateRoute>
                        <Dashboard />
                        // </PrivateRoute>
                    }
                />
                <Route
                    path="/agendamento"
                    element={
                        // <PrivateRoute>
                        <Agendamento />
                        // </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}
