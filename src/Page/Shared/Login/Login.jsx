import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(email, pass);

    //send data to server
    const url = `http://localhost:5000/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          // set token to the localStorage
          // localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);

          // redirect home page user the code is belong here
          navigate("/"); // go to home
        }
        else{
          
        }

        e.target.reset();
      });
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <label className="my-3" htmlFor="E-mail">
          E-mail
        </label>
        <input type="text" name="email" placeholder="Email" required />
        <br />
        <label className="my-3" htmlFor="Password">
          Password
        </label>
        <input type="number" name="pass" placeholder="password" required />
        <br />
        <input className="my-3" type="submit" value="submit" />
      </form>
    </>
  );
};

export default Login;
