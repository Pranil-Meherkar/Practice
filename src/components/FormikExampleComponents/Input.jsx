import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = ({ name, label, ...rest }) => {
  return (
    <div className="my-form">
      <label htmlFor={name}>
        <strong>{label}</strong>
      </label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Input;
