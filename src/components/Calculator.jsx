import React, { useState } from "react";
import styles from "./Calculator.module.css";
import Buttons from "./Buttons";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const { main_container } = styles;

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") console.log(event.target.value);
  };

  const handleBtnClick = (event, btnName) => {
    if (btnName === "=") {
      const result = eval(inputValue);
      setInputValue(result);
    } else if (btnName === "C") {
      setInputValue("");
    } else {
      setInputValue((input) => input + btnName);
    }
  };

  return (
    <div
      aria-label="calculator"
      className={`container  m-auto  border mt-5 ${main_container}`}
    >
      <input
        id="input-box"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="form-control mt-2"
        placeholder="Type..."
      />
      <Buttons handleBtnClick={handleBtnClick} />
    </div>
  );
};

export default Calculator;
