import React, { useRef, useState } from "react";

function LoginWithRefs() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    setUser({
      ...user,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <>
      {user.email === "" && user.password === "" ? (
        <div className="login">
          <h1>Login Form</h1>
          <div className="inputField">
            <label htmlFor="email">
              Email <br />
              <input
                className="input"
                type="text"
                name="email"
                ref={emailRef}
              />
            </label>
            <br />
            <label htmlFor="password">
              Password <br />
              <input
                className="input"
                type="password"
                name="password"
                ref={passwordRef}
              />
            </label>
            <br />
            <button className="login-button" onClick={handleClick}>
              LOGIN
            </button>
          </div>
        </div>
      ) : (
        <h1>Hello, {user.email}</h1>
      )}
    </>
  );
}

export default LoginWithRefs;
