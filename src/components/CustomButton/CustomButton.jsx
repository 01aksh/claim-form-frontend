/* eslint-disable react/prop-types */
const CustomButton = ({ onClick, children, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-white bg-[#8DC13F] rounded-md hover:bg-green-600 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
