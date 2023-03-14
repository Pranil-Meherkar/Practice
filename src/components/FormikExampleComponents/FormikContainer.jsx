import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";

const initialValues = {
  email: "",
  description: "",
  selectOptions: "",
  radioOptions: "",
  checkboxOptions: [],
};

const optionsList = [
  { key: "Select an option", value: "" },
  { key: "option1", value: "Option1" },
  { key: "option2", value: "Option2" },
  { key: "option3", value: "Option3" },
];

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Email required"),
  description: Yup.string().required("Description required"),
  selectOptions: Yup.string().required("Select an option"),
  radioOptions: Yup.string().required("Select an option"),
  checkboxOptions: Yup.array().min(1, "Select an option"),
});

const onSubmit = (values) => {
  console.log("values =>", values);
};

const onChange = (values) => {
  console.log("values =>", values);
};

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      onChange={onChange}
    >
      {(formikProps) => {
        return (
          <Form>
            <h3>My Form</h3>
            <FormikControl control="input" name="email" label="Email" />
            <FormikControl
              control="textarea"
              name="description"
              label="Description"
            />
            <FormikControl
              control="select"
              name="selectOptions"
              label="Select Options"
              options={optionsList}
            />
            <FormikControl
              control="radio"
              name="radioOptions"
              label="Radio Options"
              options={optionsList.slice(1)}
            />
            <FormikControl
              control="checkbox"
              name="checkboxOptions"
              label="Checkbox Options"
              options={optionsList.slice(1)}
            />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
