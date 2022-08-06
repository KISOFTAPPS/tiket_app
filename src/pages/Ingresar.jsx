import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const signInSchema = Yup.object().shape({
    usuario: Yup.string().required("Required"),
    contraseña: Yup.string().required("Required"),
});

export const Ingresar = () => {
    return (
        <section className="w-100 bg-light rounded-start">
            <div className="d-flex mt-5">
                <div className="container bg-white p-4 shadow rounded" style={{ maxWidth: "500px" }}>
                    <div className="text-center">
                        <h1 className="display-6 fw-bolder">Inicia Sesion</h1>
                    </div>
                    <Formik
                        initialValues={{
                            usuario: "",
                            contraseña: "",
                        }}
                        validationSchema={signInSchema}
                        onSubmit={(values) => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div>
                                    <label for="usuario" className="form-label fw-bold">
                                        Usuario
                                    </label>
                                    <Field
                                        id="usuario"
                                        className="form-control mb-2"
                                        name="usuario"
                                        type="text"
                                        style={{backgroundColor: "#8888"}}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="contraseña"
                                        className="form-label fw-bold"
                                    >
                                        Contraseña
                                    </label>
                                    <Field
                                        id="contraseña"
                                        className="form-control mb-2"
                                        name="contraseña"
                                        type="password"
                                        style={{backgroundColor: "#8888"}}
                                    />
                                    {/* {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null} */}
                                </div>

                                <div className="text-center">
                                    <button
                                        className="btn btn-dark"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};
