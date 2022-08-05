import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import { Layout } from "../layout";
import { Cola, Crear, Escritorio, Ingresar } from "../pages";

const RouterApp = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Outlet />
                        </Layout>
                    }
                >
                    <Route path="ingresar" element={<Ingresar />} />
                    <Route path="cola" element={<Cola />} />
                    <Route path="crear" element={<Crear />} />
                    <Route path="escritorio" element={<Escritorio />} />
                    <Route path="*" element={<Navigate to="ingresar" />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default RouterApp;
