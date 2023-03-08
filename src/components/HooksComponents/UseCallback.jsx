import React, { useCallback, useState } from "react";
import Title from "./UseCallbackComponents/Title";
import DisplayState from "./UseCallbackComponents/DisplayState";
import ButtonComponent from "./UseCallbackComponents/ButtonComponent";

function UseCallback() {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(15000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);
  return (
    <>
      <Title />
      <DisplayState state={age}>Age</DisplayState>
      <ButtonComponent incrementFunction={incrementAge}>
        Increment Age
      </ButtonComponent>
      <DisplayState state={salary}>Salary</DisplayState>
      <ButtonComponent incrementFunction={incrementSalary}>
        Increment Salary
      </ButtonComponent>
    </>
  );
}

export default UseCallback;
