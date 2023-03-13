import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email format").required("Email required"),
  password: Yup.string().required("Password required"),
});

const onSubmit = (values) => {
  console.log("Form data", values);
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              name="email"
              control="input"
              type="email"
              label="Email"
            />
            <FormikControl
              name="password"
              control="input"
              type="password"
              label="Password"
            />
            <button type="submit" disabled={!formik.isValid}>
              Login
            </button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
