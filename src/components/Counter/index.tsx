import React, { FC, ReactElement, useState } from "react";

const plusOne = (val: number): number => {
  if (val >= 10) return 10;
  return val + 1;
};

const minusOne = (val: number): number => {
  if (val <= 0) return 0;
  return val - 1;
};

const getTitle = (): string => {
  const nodeEnv = process.env.NODE_ENV;
  switch (nodeEnv) {
    case "production":
      return "Production";
    case "development":
      return "Development";
    default:
      return "Unknown";
  }
};

const Counter: FC = (): ReactElement => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{getTitle()}</div>
      <div className="display" test-dataid="display">
        {count}
      </div>
      <button
        className="plusButton"
        onClick={() => {
          setCount(plusOne(count));
        }}
        test-dataid="plusButton"
      >
        +
      </button>
      <button
        className="minusButton"
        test-dataid="minusButton"
        onClick={() => {
          setCount(minusOne(count));
        }}
      >
        -
      </button>
      <button
        className="clearButton"
        test-dataid="clearButton"
        onClick={() => {
          setCount(0);
        }}
      >
        CLR
      </button>
    </>
  );
};

export default Counter;
