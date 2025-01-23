import React from "react";
import "./Square.css";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value && <img src={value} alt="X or O" />}
    </button>
  );
};

export default Square;
