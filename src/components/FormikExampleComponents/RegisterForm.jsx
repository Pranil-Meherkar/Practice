import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  modeOfContact: "",
  phone: "",
  date: null,
};

const options = [
  { key: "Email", value: "moc-email" },
  { key: "Mobile", value: "moc-phone" },
];

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email format").required("Email required"),
  password: Yup.string().required("Password required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords don't match")
    .required("Password required"),
  modeOfContact: Yup.string().required("Required"),
  phone: Yup.string().when("modeOfContact", (modeOfContact, schema) => {
    if (modeOfContact[0] === "moc-phone") {
      return schema.required("Phone number required");
    }
    return schema;
  }),
  date: Yup.date().required("Required").nullable(),
});

const onSubmit = (values) => {
  console.log("Form data", values);
};

const RegisterForm = () => {
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
              control="input"
              label="Email"
              name="email"
              type="email"
            />
            <FormikControl
              control="input"
              label="Password"
              name="password"
              type="password"
            />
            <FormikControl
              control="input"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <FormikControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              label="Phone"
              name="phone"
              type="text"
            />
            <FormikControl control="date" label="Date" name="date" />
            <button type="submit" disabled={!formik.isValid}>
              Register
            </button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
