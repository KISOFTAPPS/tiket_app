import React from "react";

export const Crear = () => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <h3>Presione el boton para un nuevo ticket</h3>
            <button className="rounded bg-blue-900 active:bg-blue-400 p-1 text-white font-medium duration-200 shadow-lg">Nuevo ticket</button>
            <hr className="w-full"/>

            <p className="font-medium">Su numero</p>
            <span className="text-green-700 font-medium text-7xl">
                55
            </span>
        </div>
    );
};
