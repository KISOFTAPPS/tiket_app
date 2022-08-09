import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import { Layout } from "../layout";
import { Cola, Crear, Escritorio, Ingresar } from "../pages";
import { useAuthStore } from "../hooks/useAuthStore";

const RouterApp = () => {
    const { isAuthenticated, chequinAuth } = useAuthStore();

    useEffect(() => {
        chequinAuth();
    }, []);

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
                    <Route
                        path="ingresar"
                        element={
                            isAuthenticated ? (
                                <Navigate to="/escritorio" />
                            ) : (
                                <Ingresar />
                            )
                        }
                    />
                    <Route
                        path="cola"
                        element={
                            !isAuthenticated ? (
                                <Navigate to="ingresar" />
                            ) : (
                                <Cola />
                            )
                        }
                    />
                    <Route path="crear" element={<Crear />} />
                    <Route
                        path="escritorio"
                        element={
                            !isAuthenticated ? (
                                <Navigate to="ingresar" />
                            ) : (
                                <Escritorio />
                            )
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Navigate
                                to={isAuthenticated ? "escritorio" : "ingresar"}
                            />
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
};

export default RouterApp;
