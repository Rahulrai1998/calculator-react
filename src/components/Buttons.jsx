import React from "react";

const Buttons = ({ handleBtnClick }) => {
  const buttons = ["+", "-", "*", "/", "C"];

  return (
    <div className="row mt-3">
      {Array.from({ length: 10 }, (_, index) => (
        <div className="col-4" key={index}>
          <button
            type="button"
            className="btn btn-primary mt-1 w-100"
            onClick={(event) => handleBtnClick(event, index.toString())}
          >
            {index}
          </button>
        </div>
      ))}
      {buttons?.map((btn, index) => (
        <div className="col-4" key={index}>
          <button
            type="button"
            className={`btn btn-primary  mt-1 w-100`}
            onClick={(event) => handleBtnClick(event, btn)}
          >
            {btn}
          </button>
        </div>
      ))}
      <div className="col">
        <button
          type="button"
          className="btn btn-primary  mt-1 w-100"
          onClick={(event) => handleBtnClick(event, "=")}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Buttons;
