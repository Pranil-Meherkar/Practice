import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const TextArea = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default TextArea;
