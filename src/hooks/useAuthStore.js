import { useSelector, useDispatch } from "react-redux";
import { onLoading, onLogin, onLogout } from "../redux";

export const useAuthStore = () => {
    const { isLoading, isAuthenticated, user } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();

    //Funciones para el dispatch

    const startLogin = ({ usuario, escritorio }) => {
        dispatch(onLoading());

        dispatch(onLogin({ usuario: usuario, escritorio: escritorio }));
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("escritorio", escritorio);
        try {
        } catch (error) {}
    };

    const chequinAuth = () => {
        const usuario = localStorage.getItem("usuario");
        const escritorio = localStorage.getItem("escritorio");
        if (!usuario || !escritorio) return dispatch(onLogout());

        console.log(usuario, escritorio);
        dispatch(onLogin({ usuario: usuario, escritorio: escritorio }));
    };

    const startLogout = () => {
        dispatch(onLogout());
        localStorage.clear();
    };

    return {
        //* Propiedades
        isLoading,
        isAuthenticated,
        user,

        //* Metodos
        startLogin,
        startLogout,
        chequinAuth,
        
    };
};
