import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../hooks/useAuthStore";

const signInSchema = Yup.object().shape({
    usuario: Yup.string()
        .required("Required")
        .matches(/^[aA-zZ\s]+$/, "Solo Letras"),
    escritorio: Yup.number()
        .typeError("you must specify a number")
        .required("Required"),
});

export const Ingresar = () => {
    const {startLogin} = useAuthStore();

    return (
        <Formik
            initialValues={{
                usuario: "",
                escritorio: "",
            }}
            validationSchema={signInSchema}
            onSubmit={(values) => {
                // same shape as initial values
                startLogin(values)
            }}
        >
            {({ errors, touched }) => (
                <Form className="flex flex-col items-end space-y-4">
                    <div className="self-center">
                        <h1>Inicia Sesion</h1>
                    </div>
                    <div className="flex flex-row">
                        <label className="mr-1" htmlFor="usuario">
                            Usuario
                        </label>
                        <Field
                            id="usuario"
                            name="usuario"
                            type="text"
                            className="rounded h-9 w-60 bg-blue-100"
                        />
                    </div>
                    <div className="flex flex-row">
                        <label className="mr-1" htmlFor="escritorio">
                            Escritorio
                        </label>
                        <Field
                            id="escritorio"
                            name="escritorio"
                            type="text"
                            className="rounded h-9 w-60 bg-blue-100"
                        />
                        {/* {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null} */}
                    </div>

                    <div className="self-center">
                        <button
                            type="submit"
                            className="rounded bg-blue-900 active:bg-blue-400 p-1 text-white font-medium duration-200 shadow-lg"
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
