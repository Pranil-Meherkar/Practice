import React, { useState, useMemo } from "react";

function UseMemo() {
  const [fullname, setFullname] = useState(false);
  const [years, setYears] = useState(0);

  const checkYearsZero = useMemo(() => {
    let i = 0;
    while (i < 999999999) i++;
    return years === 0;
  }, [years]);
  return (
    <>
      <h3>useMemo Hook Example</h3>

      <p>Name : Pranil {fullname && "Meherkar"}</p>
      <button onClick={() => setFullname((prev) => !prev)}>fullname</button>
      <p>Years of Experience : {checkYearsZero ? "Fresher" : years}</p>
      <button onClick={() => setYears((prev) => prev + 1)}>Button</button>
    </>
  );
}

export default UseMemo;
