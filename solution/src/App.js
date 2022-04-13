import React from "react";
import buttonIcon from "./images/icon-dice.svg";
import bigPic from "./images/pattern-divider-desktop.svg";
import smallPic from "./images/pattern-divider-mobile.svg";

export default function App() {
  const [myData, setMyData] = React.useState("");
  const [number, setNumber] = React.useState("");

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setMyData(data.slip.advice);
    setNumber(data.slip.id);
  };

  React.useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="wrapper">
      <p className="advice-number text-center">ADVICE #{number}</p>
      <h1 className="advice py-5 text-center">{myData}</h1>

      <picture>
        <source media="(min-width: 768px)" srcSet={bigPic} />
        <img src={smallPic} alt="" />
      </picture>

      <button
        onClick={fetchAdvice}
        className="btn inline-block p-5 rounded-full"
      >
        <img src={buttonIcon} alt="" />
      </button>
    </div>
  );
}
