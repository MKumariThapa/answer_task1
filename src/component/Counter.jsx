import React from "react";

import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const Increment = () => {
    let newCountInrementValue = value + 1;
    setValue(newCountInrementValue);
  };

  const Decrement = () => {
    let decrementingValue = value - 1;
    setValue(decrementingValue);
  };

  const ResettingValue = () => {
    let resettingValue = 0;
    setValue(resettingValue);
  };
  return (
    <div className="bg-blue-600 flex flex-col justify-center content-center h-[100vh]">
      <div className="flex justify-center content-center mt-28	">
        <h1>Counter Task</h1>
      </div>
      <p className="flex justify-evenly content-center mt-20">
        Value is {value}
      </p>
      <div className="flex justify-evenly content-center mt-12  w-[50%] m-auto">
        <button
          onClick={Increment}
          className="flex justify-items-center	items-center	 border-4 border-green-900 p-4
                    bg-green-400  h-12	"
        >
          Increment
        </button>
        <button
          className="flex justify-items-center	items-center	 border-4 border-green-900 p-4
                    bg-green-400  h-12	"
          onClick={Decrement}
        >
          Decrement
        </button>
        <button
          className="flex justify-items-center	items-center	 border-4 border-green-900 p-4
                    bg-green-400  h-12	"
          onClick={ResettingValue}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
