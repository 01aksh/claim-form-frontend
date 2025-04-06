/* eslint-disable react/prop-types */

import { useState } from "react";

const ChildToParent = ({ sendDatatoParent }) => {
  const [Name, setName] = useState("");

  const handleChange = () => {
    sendDatatoParent(Name);
  };
  return (
    <div>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
};

export default ChildToParent;


// import { useState } from "react";
// import ChildToParent from "./components/ChildToParent/ChildToParent";

// const App = () => {
//   const [message, setMessage] = useState("");

//   const handleMessage = (msg) => {
//     setMessage(msg);
//   };
//   return (
//     <div>
//       <h1>Welcome to the React App</h1>
//       <ChildToParent sendDatatoParent={handleMessage} />
//       <h2>Message from Child: {message}</h2>
//     </div>
//   );
// };

// export default App;

