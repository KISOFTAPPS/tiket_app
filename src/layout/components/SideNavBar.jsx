import { NavLink } from "react-router-dom";
import "./SideNavBar.css";
import { useAuthStore } from "../../hooks/useAuthStore";

export const SideNavBar = ({ children }) => {
    const { isAuthenticated } = useAuthStore();
    return (
        <>
            <div
                className="flex flex-col w-40 space-y-4 h-screen bg-blue-900 text-white pt-7 whitespace-nowrap"
                style={{ height: "calc(100vh - 50px)" }}
            >
                <h3 className="px-3 py-2 font-medium">TICKETAPP</h3>
                <NavLink
                    to={isAuthenticated ? "escritorio" : "ingresar"}
                    className="px-3 py-2 font-medium duration-300 hover:bg-blue-400"
                    disabled
                >
                    {isAuthenticated ? "Escritorio" : "Ingresar"}
                </NavLink>
                <NavLink
                    to="cola"
                    className={`px-3 py-2 font-medium duration-300 hover:bg-blue-400 ${
                        !isAuthenticated && "pointer-events-none opacity-25"
                    }`}
                >
                    Cola de tickets
                </NavLink>

                <NavLink
                    to="crear"
                    className={`px-3 py-2 font-medium duration-300 hover:bg-blue-400 ${
                        isAuthenticated && "pointer-events-none opacity-25"
                    }`}
                >
                    Crear ticket
                </NavLink>
            </div>
        </>
    );
};
