import { NavLink } from "react-router-dom";
import "./SideNavBar.css";

export const SideNavBar = ({ children }) => {
    return (
        <>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
                style={{ width: "200px", height: "calc(100vh - 50px)" }}
            >
                <span className="text-center fw-bolder fs-5">TICKET-APP</span>
                <hr />
                <ul className="nav nav-pills  flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink
                            to="ingresar"
                            className="nav-link text-white"
                            aria-current="page"
                        >
                            Ingresar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="cola" className="nav-link text-white">
                            Cola
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="crear" className="nav-link text-white">
                            Crear Ticket
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};
