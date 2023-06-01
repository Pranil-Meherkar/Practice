import React from "react";
import MyForm from "./FormikExampleComponents/MyForm";
import FormikContainer from "./FormikExampleComponents/FormikContainer";
import LoginForm from "./FormikExampleComponents/LoginForm";
import RegisterForm from "./FormikExampleComponents/RegisterForm";
import CRUDForm from "./FormikExampleComponents/CRUDForm";

function FormikExample() {
  return (
    <div className="formik-example">
      {/* <h1>Formik Example</h1> */}
      {/* <MyForm /> */}
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      <CRUDForm />
    </div>
  );
}

export default FormikExample;
