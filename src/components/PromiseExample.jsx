import React from "react";

function PromiseExample() {
  //   console.log(1);
  //   let p = new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log(3);
  //       resolve();
  //     });
  //   });

  //   p.then(() => console.log(4));
  //   console.log(2);

  const KProblem = async () => {
    console.log(1);
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      });
    });
    console.log(3);
    console.log(4);
  };

  KProblem();
  return <h1>Promise Example, check console</h1>;
}

export default PromiseExample;
