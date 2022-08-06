import { useSelector, useDispatch } from "react-redux";
import { onLoading } from "../redux";

export const useAuthStore = () => {
    const { status, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    //Funciones para el dispatch

    const startLogin = async () => {
        dispatch(onLoading());
        try {
        } 
        catch (error) {

        }
    };

    return {
        //* Propiedades
        status,
        user,

        //* Metodos
    };
};
