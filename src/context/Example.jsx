/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CounterContext = createContext({ count: 0, setCount: () => {} });

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
// import { useContext } from "react";
// import { CounterContext } from "./context/Example";

// const App = () => {
//   const { count, setCount } = useContext(CounterContext);
//   return (
//     <div>
//       <h1>Welcome to the React App</h1>
//       <div className="text-center">
//         <h3 className="text-2xl">Count is: {count}</h3>
//         <button
//           onClick={() => setCount(count + 1)}
//           className="p-2 text-white bg-pink-600 rounded"
//         >
//           Increase Count
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
