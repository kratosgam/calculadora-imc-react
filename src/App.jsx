import { data } from "./data/data";

import { useState } from "react";

import "./App.css";
import ImcTable from "./components/ImcTable";

import ImcCalc from "./components/ImcCalc";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, weight, height) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".") / 100;

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    console.log("height", height);
    console.log("weight", weight);

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.class);
      }
    });

    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  );
}

export default App;
