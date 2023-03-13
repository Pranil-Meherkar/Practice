import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Checkbox = ({ name, label, options, ...rest }) => {
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
                  type="checkbox"
                  id={option.value}
                  {...fieldProps.field}
                  value={option.value}
                  checked={fieldProps.field.value.includes(option.value)}
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

export default Checkbox;
