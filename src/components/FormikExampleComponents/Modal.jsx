import React, { useState } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import axios from "axios";
import FormikControl from "./FormikControl";
import "bootstrap/dist/css/bootstrap.min.css";


const initialValues = {
  name: "",
  email: "",
  age: "",
  skills: [],
  gender: "",
};

const skillsOptions = [
  { key: "Javascript", value: "javascript" },
  { key: "React", value: "React" },
  { key: "Node Js", value: "NodeJs" },
  { key: "Problem Solving", value: "problem-solving" },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  age: Yup.string().required("Required"),
  skills: Yup.array().min(1, "Select an option"),
  gender: Yup.string().required("Required"),
});

function Modal({getDataList, editValues, setEditValues, setShowModal}) {

  const onSubmit = async (values, { resetForm }) => {
    console.log("values =>", values);

    editValues
      ? axios
          .put(`http://localhost:3004/data/${editValues.id}`, values)
          .then(() => {
            getDataList();
            resetForm();
          })
      : axios.post("http://localhost:3004/data", values).then(() => {
          getDataList();
          resetForm();
        });
    
    setShowModal(false)
    editValues && setEditValues(null);
  };
  return (
    <div className="modal-container">
      <div className="custom-modal">
      <button
          style={{ position: "absolute", right: "10px", top: "20px" }}
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => {
            setShowModal(false);
          }}
        >X
        </button>
        <div className="crud-form">
          <h2>CRUD Form</h2>
          
          <Formik
            initialValues={editValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="input-fields">
                    <FormikControl
                      control="input"
                      name="name"
                      label="Name"
                      type="text"
                    />
                    <FormikControl
                      control="input"
                      name="email"
                      label="Email"
                      type="email"
                    />
                    <FormikControl
                      control="input"
                      name="age"
                      label="Age"
                      type="text"
                    />
                    <FormikControl
                      control="checkbox"
                      name="skills"
                      label="Skills"
                      options={skillsOptions}
                    />
                    <FormikControl
                      control="radio"
                      name="gender"
                      label="Gender"
                      options={[
                        { key: "male", value: "Male" },
                        { key: "female", value: "Female" },
                      ]}
                    />
                  </div>
                  <button type="submit" disabled={!formik.isValid}>
                    {editValues ? "Update" : "Submit"}
                  </button>
                  <button type="reset">Reset</button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Modal;
