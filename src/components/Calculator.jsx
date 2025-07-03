import React, { useState } from "react";
import styles from "./Calculator.module.css"

const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const buttons = ["+", "-", "*", "/", "C"];

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") console.log(event.target.value);
  };

  return (
    <div
      aria-label="calculator"
      className={`container  m-auto  border mt-5 ${styles.main_container}`}
    >
      <input
        id="input-box"
        type="number"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="form-control mt-2"
        placeholder="Type..."
      />
      <div className="row mt-3">
        {Array.from({ length: 10 }, (_, index) => (
          <div className="col-4">
            <button type="button" className="btn btn-primary mt-1 w-100">
              {index}
            </button>
          </div>
        ))}
        {buttons?.map((btn) => (
          <div className="col-4">
            <button type="button" className={`btn btn-primary  mt-1 w-100`}>
              {btn}
            </button>
          </div>
        ))}
        <div className="col">
          <button type="button" className="btn btn-primary  mt-1 w-100">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
