import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Private/Home";
import { useContext, useEffect, useState } from "react";
import { Context } from "./settings/Context/Context";
import { Modal } from "./Components";
import axios from "axios";

export default function App() {
  const { pathname } = useLocation();
  const { setVideoPageActive, modal, setModal, setToken, setUser,  setSignType, signType, darkMode } =
    useContext(Context);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleChange = (event) => {
    let value = event.target.value;
    let rejex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    switch (event.target.id) {
      case "displayName":
        {
          if (value.length) {
            let displayName = value.split(" ");
            if (
              !displayName?.some((item) => {
                if (displayName?.length === 1) {
                  setNameError(true);
                } else if (
                  displayName?.length > 1 &&
                  displayName[0].trim().length &&
                  displayName[1].trim().length
                ) {
                  if (
                    item.endsWith("va") ||
                    item.endsWith("ev") ||
                    item.endsWith("ov")
                  ) {
                    return true;
                  } else {
                    return false;
                  }
                }
              })
            ) {
              setNameError(true);
            } else {
              setNameError(false);
            }
          }
        }
        break;
      case "email":
        {
          if (value.length) {
            if (!rejex.test(value)) {
              setEmailError(true);
            } else {
              setEmailError(false);
            }
          }
        }
        break;
      case "password":
        {
          console.log("ishladi");
          if (value.length > 6 && value.length <= 12) {
            setPasswordError(false);
          } else {
            setPasswordError(true);
          }
        }
        break;
      default:
        return false;
    }
  };
  useEffect(() => {
    if (pathname.substring(1, 10) === "videopage") {
      setVideoPageActive(true);
    } else {
      setVideoPageActive(false);
    }
  }, [pathname]);
  useEffect(() => {
    if(modal){
      setSignType(true)
    }
  },[modal])
  const handleSub = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (
      data.get("displayName").length &&
      !nameError &&
      data.get("email") &&
      !emailError &&
      !passwordError &&
      data.get("password")
    ) {
      const user = {
        name: data.get("displayName"),
        email: data.get("email"),
        password: data.get("password"),
        date: new Date().toLocaleString(),
      };
      const request = await axios.post("http://localhost:777/register", user);
      if (request?.status === 201) {
        const response = await request.data;
        console.log(response);
        setToken(response?.accessToken);
        setUser(response.user);
        setModal(false)
        window.location.reload()
      }
    } else {  
      console.log("Qandaydir xatolik bor");
    }
  };
  const handleSubLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (
      data.get("email") &&
      !emailError &&
      !passwordError &&
      data.get("password")
    ) {
      const user = {
        email: data.get("email"),
        password: data.get("password"),
        date: new Date().toLocaleString(),
      };
      const request = await axios.post("http://localhost:777/login", user);
      if (request?.status === 200) {
        const response = await request.data;
        setToken(response?.accessToken);
        setUser(response.user);
        setModal(false)
        window.location.reload()
      }
    } else {  
      console.log("Qandaydir xatolik bor");
    }
  }
  useEffect(() => {
    document.body.style.background = darkMode
  },[darkMode])
  return (
    <>
      <Modal title={"Register"} modal={modal} setModal={setModal}>
        {signType ? (
           <>
        <form onSubmit={handleSub}>
          <label htmlFor="displayName">
            {nameError ? (
              <p className="error">{"Ism familiya kritish majburiy"}</p>
            ) : null}
            <input
              onBlur={handleChange}
              onKeyUp={handleChange}
              className="border-transparent"
              type="text"
              placeholder="Display Name"
              name="displayName"
              id="displayName"
            />
          </label>
          <label htmlFor="email">
            {emailError && <p className="error">Email to`g`ri kriting</p>}
            <input
              onBlur={handleChange}
              onKeyUp={handleChange}
              className="border-transparent"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            {passwordError && (
              <p className="error">Password 6/12 oralig`ida bolsn.</p>
            )}
            <input
              onBlur={handleChange}
              onKeyUp={handleChange}
              className="border-transparent"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </label>
          <button className="register_btn">Register</button>
        </form>
        <button className="login_btn" onClick={() => setSignType(false)}>Login</button>
          </>
        ): (
          <>
          <form onSubmit={handleSubLogin}>
             <label htmlFor="email">
            {emailError && <p className="error">Email togri kriting</p>}
            <input
              onBlur={handleChange}
              onKeyUp={handleChange}
              className="border-transparent"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            {passwordError && (
              <p className="error">Password xato</p>
            )}
            <input
              onBlur={handleChange}
              onKeyUp={handleChange}
              className="border-transparent"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </label>
              <button className="login_btn submitd_btn">Submit</button>
          </form>
          <button className="register_btn" onClick={() => setSignType(true)}>Register</button>
          </>
        )}
      </Modal>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}
