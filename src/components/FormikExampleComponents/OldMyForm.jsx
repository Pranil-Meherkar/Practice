import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  degree: "",
};

const onSubmit = (values) => {
  console.log("values =>", values);
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name Required";
  }
  if (!values.email) {
    errors.email = "Email Required";
  }
  if (!values.degree) {
    errors.degree = "Value Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid Email Format").required("Email required"),
  degree: Yup.string().required("Value required"),
});

function MyForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  return (
    <div>
      <form className="my-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="form-fields-error">{formik.errors.name}</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="form-fields-error">{formik.errors.email}</p>
        )}
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.degree}
        />
        {formik.errors.degree && formik.touched.degree && (
          <p className="form-fields-error">{formik.errors.degree}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
