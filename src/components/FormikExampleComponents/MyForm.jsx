import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  email: "",
  degree: "",
};

const onSubmit = (values) => {
  console.log("values =>", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid Email Format").required("Email required"),
  degree: Yup.string().required("Value required"),
});

function MyForm() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="my-form">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
          <label htmlFor="degree">Degree</label>
          <Field type="text" id="degree" name="degree" />
          <ErrorMessage name="degree" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default MyForm;
