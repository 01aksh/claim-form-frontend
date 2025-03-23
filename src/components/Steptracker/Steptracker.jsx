/* eslint-disable react/prop-types */
import { CheckCircle, Circle } from "lucide-react";

const StepsTracker = ({ steps, currentStep, isSidebarOpen }) => {
  return (
    <div
      className={`fixed lg:relative w-[80%] border-r-2 border-gray-400 p-6 bg-white h-screen lg:h-auto z-40 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <ul className="mt-16 space-y-4">
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center space-x-3">
            {index <= currentStep ? (
              <CheckCircle className="text-[#8DC13F]" size={20} />
            ) : (
              <Circle className="text-gray-400" size={20} />
            )}
            <p
              className={`text-lg ${
                index === currentStep ? "font-medium text-black" : "text-black"
              }`}
            >
              {step.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepsTracker;
