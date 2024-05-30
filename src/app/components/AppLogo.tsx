"use client";

import { useState } from "react";

type AppLogoProps = {
  title: string;
};

export default function AppLogo({ title }: AppLogoProps) {
  const [subTitle2, setSubTitle2] = useState("create by npru");

  const subTitle = "create by se";
  const dateNow = new Date();
  const timeNow = <p>{dateNow.toLocaleTimeString()}</p>;
  const isShow = false;
  const isShowDate = true;
  const onHandleClick = () => {
    setSubTitle2("create by se");
    alert("Hello Next.js");
  };
  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <p style={{ color: "green" }}>
        <b>{title}</b>
      </p>
      <button onClick={onHandleClick}>Click Me</button>
      <br />
      <small>
        {subTitle.toUpperCase()} | {subTitle2.toUpperCase()}
      </small>
      <small> {dateNow.toLocaleDateString()}</small>
      {isShow && timeNow}
      {isShowDate ? (
        <small> {dateNow.toLocaleDateString()}</small>
      ) : (
        <small>{timeNow}</small>
      )}
    </>
  );
}
