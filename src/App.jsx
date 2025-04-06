import CustomDropDown from "./components/CustomDropDown/CustomDropDown";

const App = () => {
  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const colors = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
  ];

  const sizes = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <CustomDropDown
        options={fruits}
        onSelect={(option) => console.log("Selected fruit:", option)}
        placeholder="Select a fruit"
      />{" "}
      <CustomDropDown
        options={colors}
        onSelect={(option) => console.log("Selected color:", option)}
        placeholder="Select a color"
      />
      <CustomDropDown
        options={sizes}
        onSelect={(option) => console.log("Selected size:", option)}
        placeholder="Select a size"
      />
    </div>
  );
};

export default App;
