import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterProvider } from "./context/Example.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);


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
