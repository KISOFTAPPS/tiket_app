import React from "react";

export const Escritorio = () => {
    return (
        <section className="w-100 bg-light rounded-start p-4">
            <div className="container bg-white h-100 shadow rounded pt-5">
                <div className="d-flex">
                    <div className="w-100">
                        <h1>
                            Usuario: <strong>KARIM</strong>
                        </h1>
                        <p>
                            Usted esta trabajando en el escritorio:{" "}
                            <strong className="text-success">5</strong>
                        </p>
                    </div>
                    <button
                        className="btn btn-danger align-items-end mt-2"
                        style={{ width: "100px", height: "50px" }}
                    >
                        Salir
                    </button>
                </div>
                <hr />
                <div className="d-flex">
                    <div className="w-100">
                        <p>
                           Esta entrando el ticket numero: <strong className="display-5 text-danger">5</strong>
                        </p>
                    </div>
                    <button
                        className="btn btn-success align-items-end mt-2"
                        style={{ width: "120px", height: "50px" }}
                    >
                        Siguiente >
                    </button>
                </div>
            </div>
        </section>
    );
};
