import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const initialValues = {
  name: "",
  email: "",
  degree: "",
  skills: "",
  social: {
    linkedIn: "",
    github: "",
  },
  phoneNumbers: [""],
};

const validateDegree = (values) => {
  let error;
  if (values.length < 3) error = "Min 4 char required";
  return error;
};

const onSubmit = (values, onSubmitProps) => {
  console.log("values =>", values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid Email Format").required("Email required"),
  // degree: Yup.string().required("Value required"),
});

function MyForm() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formikProps) => {
          const {
            validateField,
            validateForm,
            setFieldTouched,
            setTouched,
            isValid,
            isSubmitting,
          } = formikProps;
          return (
            <Form className="my-form">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={ErrorText} />
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component={ErrorText} />
              <label htmlFor="degree">Degree</label>
              <Field
                type="text"
                id="degree"
                name="degree"
                validate={validateDegree}
              />
              <ErrorMessage name="degree" component={ErrorText} />
              <label htmlFor="skills">Skills</label>
              <Field as="textarea" id="skills" name="skills" />
              <ErrorMessage name="skills" />
              <label htmlFor="linkedIn">LinkedIn</label>
              <Field id="linkedIn" name="social.linkedIn" />
              <ErrorMessage name="social.linkedIn" />
              <label htmlFor="github">Github</label>
              <Field id="github" name="social.github" />
              <ErrorMessage name="social.github" />
              <label htmlFor="phoneNumbers">Phone Numbers</label>
              <FieldArray id="phoneNumbers" name="phoneNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { phoneNumbers } = form.values;
                  return (
                    <div>
                      {phoneNumbers.map((item, index) => {
                        return (
                          <div key={index}>
                            <Field name={`phoneNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                            {!index && (
                              <button type="button" onClick={() => push("")}>
                                +
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
              <ErrorMessage name="social.phoneNumbers" />
              <button
                type="button"
                onClick={() => {
                  setTouched({
                    name: true,
                    email: true,
                    degree: true,
                  });
                  validateForm();
                }}
              >
                validate All
              </button>
              <button
                type="button"
                onClick={() => {
                  setFieldTouched("degree");
                  validateField("degree");
                }}
              >
                validate Degree
              </button>
              <button type="reset">Reset</button>
              <button type="submit" disabled={!isValid || isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default MyForm;
