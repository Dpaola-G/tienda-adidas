import React from "react";

const ButtonComponent = ({ textButton, styleButton, cliqueame }) => {
  return (
    <button
      onClick={() => cliqueame()}
      className={`btn btn-success ${styleButton} `}
    >
      {" "}
      {textButton}{" "}
    </button>
  );
};
export default ButtonComponent;           




