import { useState } from "react";
import "./ImcCalc.css";
import Button from "./Button";

const ImcCalc = ({ calcImc }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };

  // Ajustado para retornar apenas números como string
  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-control">
          <label htmlFor="weight">Peso (kg):</label>
          <input
            type="text" // Mudado para text para a validação de caracteres funcionar melhor
            id="weight"
            name="weight"
            placeholder="Ex: 70"
            onChange={(e) => handleWeightChange(e)} // Passando o evento completo
            value={weight}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="height">Altura (cm):</label>
          <input
            type="text" // Mudado para text
            id="height"
            name="height"
            placeholder="Ex: 170"
            onChange={(e) => handleHeightChange(e)} // Passando o evento completo
            value={height}
            required
          />
        </div>
        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcImc(e, weight, height)}
          />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
