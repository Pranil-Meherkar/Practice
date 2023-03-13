import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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

const CRUDForm = () => {
  const [dataList, setDataList] = useState([]);

  const getDataList = () => {
    axios
      .get("http://localhost:3004/data")
      .then((res) => setDataList(res.data))
      .catch((err) => console.log(err.message));
  };
  const onSubmit = async (values) => {
    console.log("values =>", values);
    axios.post("http://localhost:3004/data", values).then(() => {
      getDataList();
    });
  };

  useEffect(() => {
    getDataList();
  }, []);
  return (
    <div className="crud-form-page">
      <div className="crud-form">
        <h2>CRUD Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
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
                  Submit
                </button>
                <button type="reset">Reset</button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="data-table">
        <h2>Data Entries</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Skills</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    {item.skills.reduce((acc, skill) => acc + ", " + skill)}
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRUDForm;
