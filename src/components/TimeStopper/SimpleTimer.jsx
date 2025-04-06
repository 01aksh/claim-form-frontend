import { useRef, useState } from "react";

const SimpleTimer = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const start = () => {
    if (!countRef.current) {
      countRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
  };
  const stop = () => {
    clearInterval(countRef.current);
    countRef.current = null;
  };
  const reset = () => {
    setCount(0);
    clearInterval(countRef.current);
    countRef.current = null;
  };

  return (
    <div>
      <p>Simple Timer</p>
      <p>Count value: {count}</p>
      <button onClick={start} className="p-2 bg-red-400 rounded-md">
        Start
      </button>
      <button onClick={stop} className="p-2 bg-yellow-400 rounded-md">
        Stop
      </button>
      <button onClick={reset} className="p-2 bg-green-400 rounded-md">
        Reset
      </button>
    </div>
  );
};

export default SimpleTimer;
