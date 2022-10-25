import React from "react";
import style from "./LoginCSS.module.scss";
import {
  BlueButton,
  ElectroCAEDLogo,
  Gombuz,
  LogoInput,
} from "../globalComponents/Components";
import { faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import { default_url } from "../Globals";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/LoginReducer";
import LoginReducer from "../redux/LoginReducer";
export function Login() {
  return (
    <div className={style.Login}>
      <LoginTab />
    </div>
  );
}

export function LoginTab() {
  const dispatch = useDispatch();
  async function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    let response = await fetch(default_url + "login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.currentTarget.loginmail.value,
        password: e.currentTarget.loginpassword.value,
      }),
    });
    if (response.ok) {
      let userData: { message: string; token: string } = await response.json();
      dispatch(login(userData.token));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        width: "50vw",
      }}
    >
      <form
        className={style.LoginTab}
        onSubmit={(e) => {
          e.preventDefault();
          formSubmit(e);
        }}
      >
        <ElectroCAEDLogo fontSize={1.4} />
        <div
          style={{
            display: "flex",
            gap: ".6rem",
          }}
        >
          <LogoInput
            width={17}
            fontSize={1}
            icon={faUser}
            placeholder={"Enter the email address"}
            fontColor={"#a2a2a2"}
            name={"loginmail"}
          />
          <Gombuz width={2} helptext={"Enter the registered email."} />
        </div>
        <div
          style={{
            display: "flex",
            gap: ".6rem",
          }}
        >
          <LogoInput
            width={17}
            fontSize={1}
            icon={faEye}
            placeholder={"Enter the password"}
            fontColor={"#a2a2a2"}
            type={"password"}
            name={"loginpassword"}
          />
          <Gombuz width={2} helptext={"Enter the registered password."} />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <BlueButton
            background={"#365880"}
            borderColor={"#4C708C "}
            color={"#ffffff"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
}
