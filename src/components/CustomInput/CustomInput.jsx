/* eslint-disable react/prop-types */
const CustomInput = ({ placeholder, type, value, handleChange, name }) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="p-2 mb-2 border-2 border-gray-300 rounded-md max-w-7xl"
        required
      />
    </>
  );
};

export default CustomInput;
