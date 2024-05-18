import React, { useState } from "react";
import "../Login/Login.css";
import Footer from "../footer/Footer";
import Stay from "../stay_home/Stay_home";
import axios from "../../api";
import { useNavigate } from "react-router-dom";
import logo from "../../img/Logo.png";
import { toast } from "react-toastify";
import karta from "../../img/karta.png";
function Login() {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  let navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log("res>>>", res.data.token);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/Admin");
      })
      .catch((err) => {
        console.log("err>>>", err);
        toast.error("username or password is incorrect");
      });
  };
  return (
    <div className="continer">
      <div className="login">
        <div className=" l_Container">
          <img src={logo} alt="" />
        </div>

        <div className="sign_up_Container">
          <div className="input">
            <form onSubmit={handleLogin}>
              <label htmlFor="email">
                <p>Elektron manzilingiz*</p>
              </label>{" "}
              <br />
              <input
                className="inp"
                type="text"
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br /> <br />
              <label htmlFor="password">
                <p>Parol*</p>
              </label>{" "}
              <br />
              <input
                className="inp"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div className="btnlar">
                <button className="sub_btn" type="submit">
                  Kirish
                </button>{" "}
                <br />
                <button
                  className="sub_btn"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  Ortga
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
