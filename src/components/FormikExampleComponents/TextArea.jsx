import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const TextArea = ({ name, label, ...rest }) => {
  return (
    <div className="my-form">
      <label htmlFor={name}>
        <strong>{label}</strong>
      </label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default TextArea;
