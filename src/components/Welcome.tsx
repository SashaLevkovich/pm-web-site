import { useState } from "react";
import { useStore } from "../store/store";

export const WelcomeComponent = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex flex-row gap-2">
        <button
          onClick={increment}
          className="bg-blue-500 text-white p-2 rounded-md">
          +
        </button>
        <button
          onClick={decrement}
          className="bg-blue-500 text-white p-2 rounded-md">
          -
        </button>
      </div>
    </div>
  );
};
