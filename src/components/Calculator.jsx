import React from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const buttons = [""];
  return (
    <div className={`container  m-auto  border mt-5 ${styles.main_container}`}>
      <input
        id="input-box"
        type="number"
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
