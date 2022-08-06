import React from "react";

export const Crear = () => {
    return (
        <section className="w-100 bg-light rounded-start p-4">
            <div className="container bg-white h-100 shadow rounded text-center pt-5">
                <h3>Presione el boton para un nuevo ticket</h3>
                <button className="btn btn-primary">Nuevo ticket</button>
                <hr />

                <p className="mt-5">Su numero</p>
                <span
                    className="display-1 fw-bolder"
                    style={{ color: "green" }}
                >
                    55
                </span>
            </div>
        </section>
    );
};
