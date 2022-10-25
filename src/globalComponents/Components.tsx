import React from "react";
import style from "./ComponentsCSS.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface LoginInterface {
  fontSize: number;
}
export function ElectroCAEDLogo(props: LoginInterface) {
  const { fontSize } = props;
  return (
    <p
      className={style.electrocaedLogo}
      style={{
        fontSize: `${fontSize}rem`,
      }}
    >
      Electro<span className={style.electrocaedLogoSpan}>CAED</span>
    </p>
  );
}
interface LogoInputInterface {
  fontSize: number;
  icon: IconDefinition;
  width: number;
  placeholder: string;
  fontColor?: string;
  type?: string;
  autocomplete?: string;
  name: string;
}
export function LogoInput({
  fontSize,
  icon,
  width,
  fontColor,
  placeholder,
  type,
  name,
  autocomplete,
}: LogoInputInterface) {
  return (
    <div
      className={style.LogoInput}
      style={{
        width: `${width}rem`,
        fontSize: `${fontSize}rem`,
        color: `${fontColor}`,
      }}
    >
      <FontAwesomeIcon icon={icon} />
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        style={{
          padding: 0,
          margin: 0,
        }}
        required={true}
        autoComplete={autocomplete}
      />
    </div>
  );
}

LogoInput.defaultProps = {
  fontColor: "#000000",
  type: "text",
  autocomplete: "on",
};

interface BlueButtonInterface {
  background: string;
  borderColor: string;
  color: string;
  type?: "submit" | "reset" | "button";
}
//JetBrains Blue Button
export function BlueButton(props: BlueButtonInterface) {
  return (
    <button type={props.type} className={style.BlueButton} style={props}>
      Create Account
    </button>
  );
}
BlueButton.defaultProps = {
  type: "button",
};

interface GombuzInterface {
  width: number;
  helptext: String;
  leftAlign?: number;
}
export function Gombuz(props: GombuzInterface) {
  return (
    <div
      className={style.Gombuz}
      style={{
        width: `${props.width}rem`,
        height: `${props.width}rem`,
      }}
    >
      <p>?</p>
      <div
        className={style.HoverGombuz}
        style={{
          left: `${props.leftAlign}%`,
        }}
      >
        <p>{props.helptext}</p>
      </div>
    </div>
  );
}
Gombuz.defaultProps = {
  leftAlign: 105,
};
