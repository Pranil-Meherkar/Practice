import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Radio = ({ name, label, options, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>
        <strong>{label}</strong>
      </label>
      <br />
      <Field id={name} name={name} {...rest}>
        {(fieldProps) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...fieldProps.field}
                  value={option.value}
                  checked={fieldProps.field.value === option.value}
                />
                <label htmlFor={name}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Radio;
