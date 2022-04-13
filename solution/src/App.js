import React from "react";
import buttonIcon from "./images/icon-dice.svg";
import bigPic from "./images/pattern-divider-desktop.svg";
import smallPic from "./images/pattern-divider-mobile.svg";

export default function App() {
  const [myData, setMyData] = React.useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setMyData(data.slip.advice);
  }

  React.useEffect(() => {
    getAdvice();
  }, []);

  // React.useEffect(() => {
  //   console.log("effect ran");
  //   fetch("https://api.adviceslip.com/advice")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.slip.advice);
  //     });
  // }, [data]);

  return (
    <div className="wrapper">
      <p className="advice-number text-center">ADVICE #117</p>
      <h1 className="advice py-5 text-center">{myData}</h1>

      <picture>
        <source media="(min-width: 768px)" srcSet={bigPic} />
        <img src={smallPic} alt="" />
      </picture>

      <button onClick={getAdvice} className="btn inline-block p-5 rounded-full">
        <img src={buttonIcon} alt="" />
      </button>
    </div>
  );
}
