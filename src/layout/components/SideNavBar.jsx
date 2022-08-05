import { NavLink } from "react-router-dom";

export const SideNavBar = ({ children }) => {
    return (
        <>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100"
                style={{ width: "280px" }}
            >
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                    <span className="fs-4">TICKET-APP</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="ingresar" className="nav-link text-white" aria-current="page">
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
                <hr />
            </div>
        </>
    );
};
