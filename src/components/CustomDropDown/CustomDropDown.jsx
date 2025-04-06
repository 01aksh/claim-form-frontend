/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const CustomDropDown = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };
  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options.map((option) => (
            <div
              key={option.value}
              className={`dropdown-item ${
                selectedOption?.value === option.value ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
// const fruits = [
//   { value: "apple", label: "Apple" },
//   { value: "banana", label: "Banana" },
//   { value: "orange", label: "Orange" },
// ];

// const colors = [
//   { value: "red", label: "Red" },
//   { value: "green", label: "Green" },
//   { value: "blue", label: "Blue" },
// ];

// const sizes = [
//   { value: "small", label: "Small" },
//   { value: "medium", label: "Medium" },
//   { value: "large", label: "Large" },
// ];

// <CustomDropDown
//         options={fruits}
//         onSelect={(option) => console.log("Selected fruit:", option)}
//         placeholder="Select a fruit"
//       />{" "}
//       <CustomDropDown
//         options={colors}
//         onSelect={(option) => console.log("Selected color:", option)}
//         placeholder="Select a color"
//       />
//       <CustomDropDown
//         options={sizes}
//         onSelect={(option) => console.log("Selected size:", option)}
//         placeholder="Select a size"
//       />