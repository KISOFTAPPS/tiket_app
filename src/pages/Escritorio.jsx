import React from "react";
import { useAuthStore } from "../hooks/useAuthStore";

export const Escritorio = () => {
    const {user,startLogout} = useAuthStore();
    

    return (
            <div className="w-full flex flex-col">
                <div className="flex justify-between my-1">
                    <div className="">
                        <h1 className="text-4xl my-1">
                            Usuario: <strong>{user.usuario}</strong>
                        </h1>
                        <p>
                            Usted esta trabajando en el escritorio:{" "}
                            <strong className="text-green-700">{user.escritorio}</strong>
                        </p>
                    </div>
                    <button
                        className="rounded bg-red-900 active:bg-red-400 p-1 text-white font-medium duration-200 shadow-lg"
                        style={{ width: "100px", height: "50px" }}
                        onClick={startLogout}
                    >
                        Salir
                    </button>
                </div>
                <hr />
                <div className="flex justify-between my-1">
                    <div className="">
                        <p>
                           Esta entrando el ticket numero: <strong className="text-4xl text-red-700">55</strong>
                        </p>
                    </div>
                    <button
                        className="rounded bg-blue-900 active:bg-blue-400 p-1 text-white font-medium duration-200 shadow-lg"
                        style={{ width: "120px", height: "50px" }}
                    >
                        Siguiente >
                    </button>
                </div>
            </div>
    );
};
