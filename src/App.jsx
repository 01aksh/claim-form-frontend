import { useState } from "react";
import ChildToParent from "./components/ChildToParent/ChildToParent";

const App = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <ChildToParent sendDatatoParent={handleMessage} />
      <h2>Message from Child: {message}</h2>
    </div>
  );
};

export default App;
