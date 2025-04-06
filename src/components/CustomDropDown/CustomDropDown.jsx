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
