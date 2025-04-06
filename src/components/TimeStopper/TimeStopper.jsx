import { useEffect, useRef, useState } from "react";

const TimeStopper = () => {
  const count = useRef(0);
  const [num, setnum] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    count.current = setInterval(() => setnum((prev) => prev + 1), 1000);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(count.current);
  };
  const handleReset = () => {
    setnum(0);
    clearInterval(count.current);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(count.current);
  }, []);
  return (
    <div>
      <p>{num}</p>
      <button
        onClick={handleStart}
        disabled={isRunning}
        className="p-2 bg-red-400 rounded-md"
      >
        Start
      </button>
      <button onClick={handleStop} className="p-2 bg-yellow-400 rounded-md">
        Stop
      </button>
      <button onClick={handleReset} className="p-2 bg-green-400 rounded-md">
        Reset
      </button>
    </div>
  );
};

export default TimeStopper;
