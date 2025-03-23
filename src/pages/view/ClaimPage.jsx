import { Menu, X } from "lucide-react";
import { useState } from "react";
import { postClaim } from "../../api/services/claimServices.js";
import BondInformations from "../../components/BondInformation/BondInformation.jsx";
import ClaimInformation from "../../components/ClaimInformation/ClaimInformation.jsx";
import ClaimPayment from "../../components/ClaimPayment/ClaimPayment.jsx";
import ClaimRecovery from "../../components/ClaimRecovery/ClaimRecovery.jsx";
import StepsTracker from "../../components/Steptracker/Steptracker.jsx";
import { steps, TimeBarredDays } from "../../utils/constant.js";

const ClaimPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [openSections, setOpenSections] = useState({
    claimInfo: true,
    claimPayment: true,
    claimRecovery: true,
  });

  const [BondInformation, setBondInformation] = useState({
    claimNo: 1100,
    claimDate: "2024-03-31",
    monthlyRent: 5300,
    tenantName: "Akshay L",
    landlordName: "Akash",
    lAndLPeriod: "1234567",
    mobileNo: "9699100704",
    emailID: "akshay@gmail.com",
    lAndLAgreement: true,
    bondID: 132,
    bondPeriod: "10 Days",
    lAndLExpiryDate: "2024-03-31",
    bondVersion: "II",
    bondValue: 4000,
    bondStatus: "Ongoing",
    claimStatus: "Ongoing",
  });
  const [claimInformation, setClaimInformation] = useState({
    checkInDate: "",
    checkOutDate: "",
    stayDays: "",
    checkOutNoticeDate: "",
    lockInPeriod: "",
    noticePeriod: "",
    breachLockInDays: "",
    breachNoticeDays: "",
  });

  const [isFirstFormValid, setIsFirstFormValid] = useState(false);

  const [errors, setErrors] = useState({});
  const [claimInformationErrors, setClaimInformationErrors] = useState({});

  const [isDataFilled, setIsDataFilled] = useState(false);

  /**
   * The handleBondInfoInputChange function updates the BondInformation state with the new value based on the input name.
   */
  const handleBondInfoInputChange = (e) => {
    const { name, value } = e.target;
    setBondInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * The function `toggleAgreement` toggles the value of the `lAndLAgreement` property in the
   * `BondInformation` state using the `setBondInformation` function.
   */
  const toggleAgreement = () => {
    setBondInformation((prev) => ({
      ...prev,
      lAndLAgreement: !prev.lAndLAgreement,
    }));
  };

  /**
   * The function `validateForm` checks for required fields and validates input data for a form related
   * to bond information.
   * @returns The `validateForm` function is returning a boolean value. It returns `true` if there are
   * no errors in the form fields, indicating that the form is valid. Otherwise, it returns `false` if
   * there are errors in any of the form fields, indicating that the form is invalid.
   */

  const validateForm = () => {
    const newErrors = {};

    if (!BondInformation.tenantName.trim()) {
      newErrors.tenantName = "Tenant Name is required";
    }

    if (!BondInformation.landlordName.trim()) {
      newErrors.landlordName = "Landlord Name is required";
    }

    if (!BondInformation.lAndLPeriod.trim()) {
      newErrors.lAndLPeriod = "L&L Period is required";
    }

    if (!BondInformation.mobileNo.trim()) {
      newErrors.mobileNo = "Mobile No is required";
    } else if (!/^\d{10}$/.test(BondInformation.mobileNo)) {
      newErrors.mobileNo = "Mobile No must be 10 digits";
    }

    if (!BondInformation.emailID.trim()) {
      newErrors.emailID = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BondInformation.emailID)) {
      newErrors.emailID = "Invalid Email ID";
    }

    if (!BondInformation.bondID) {
      newErrors.bondID = "Bond ID is required";
    }

    if (!BondInformation.bondPeriod.trim()) {
      newErrors.bondPeriod = "Bond Period is required";
    }

    if (!BondInformation.lAndLExpiryDate.trim()) {
      newErrors.lAndLExpiryDate = "L&L Expiry Date is required";
    }

    if (!BondInformation.bondVersion.trim()) {
      newErrors.bondVersion = "Bond Version is required";
    }

    if (!BondInformation.bondValue) {
      newErrors.bondValue = "Bond Value is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /**
   * The function `submitClaim` asynchronously submits bond information for a claim and handles success
   * and error responses.
   * @returns The `submitClaim` function is returning the data received from the API response after
   * successfully submitting the claim.
   */
  const submitClaim = async () => {
    const bondInformationObject = {
      claim_no: BondInformation.claimNo,
      claim_date: BondInformation?.claimDate,
      monthly_rent: BondInformation?.monthlyRent,
      tenant_id_name: BondInformation?.tenantName,
      landlord_id_name: BondInformation?.landlordName,
      ll_period: BondInformation.lAndLPeriod,
      mobile_no: BondInformation.mobileNo,
      email_id: BondInformation.emailID,
      ll_agreement: BondInformation.lAndLAgreement,
      bond_id: BondInformation.bondID,
      bond_period: BondInformation.bondPeriod,
      ll_expiry_date: BondInformation.lAndLExpiryDate,
      bond_version: BondInformation.bondVersion,
      bond_value: BondInformation.bondValue,
      bond_status: BondInformation.bondStatus,
      claim_status: BondInformation.claimStatus,
    };

    try {
      const response = await postClaim(bondInformationObject);
      console.log("Claim submitted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error submitting claim:", error);
      throw error;
    }
  };

  /**
   * The handleSave function validates two forms and progresses to the next step if both are valid,
   * displaying alerts or logging errors as needed.
   */
  const handleSave = () => {
    const isFirstFormValid = validateForm();

    if (isFirstFormValid) {
      setIsFirstFormValid(true);
      submitClaim(BondInformation);
      alert("Bond Information Done");
      setCurrentStep((prevState) => prevState + 1);

      const isSecondFormValid = validateClaimInformationForm();

      if (isSecondFormValid) {
        alert("Claim Information Done");
      } else {
        console.log("Second form has errors. Please fix them.");
      }
    } else {
      console.log("First form has errors. Please fix them.");
    }
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleClaimInfoInputChange = (e) => {
    const { name, value } = e.target;
    setClaimInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
    checkIfDataFilled({ ...claimInformation, [name]: value });
  };

  const validateClaimInformationForm = () => {
    const newClaimInformationErrors = {};

    if (!claimInformation.checkInDate.trim()) {
      newClaimInformationErrors.checkInDate = "Check-in Date is required";
    }
    if (!claimInformation.checkOutDate.trim()) {
      newClaimInformationErrors.checkOutDate = "Check-Out Date is required";
    }
    if (!claimInformation.checkOutNoticeDate.trim()) {
      newClaimInformationErrors.checkOutNoticeDate =
        "Check-Out Notice Date is required";
    }
    if (!claimInformation.lockInPeriod.trim()) {
      newClaimInformationErrors.lockInPeriod = "Lock-In Period is required";
    }
    if (!claimInformation.noticePeriod.trim()) {
      newClaimInformationErrors.noticePeriod = "Notice Period is required";
    }
    if (!claimInformation.stayDays.trim()) {
      newClaimInformationErrors.stayDays = "Stay Days is required";
    }
    if (!claimInformation.breachLockInDays.trim()) {
      newClaimInformationErrors.breachLockInDays =
        "Breach in Lock-In Period Days is required";
    }
    if (!claimInformation.breachNoticeDays.trim()) {
      newClaimInformationErrors.breachNoticeDays =
        "Breach in Notice Period Days is required";
    }

    setClaimInformationErrors(newClaimInformationErrors);

    // Return true if no errors
    return Object.keys(newClaimInformationErrors).length === 0;
  };

  const checkIfDataFilled = (data) => {
    const isFilled =
      data.checkInDate.trim() &&
      data.checkOutDate.trim() &&
      data.stayDays.trim() &&
      data.checkOutNoticeDate.trim() &&
      data.lockInPeriod.trim() &&
      data.noticePeriod.trim() &&
      data.breachLockInDays.trim() &&
      data.breachNoticeDays.trim();
    setIsDataFilled(isFilled);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full">
      <button
        onClick={toggleSidebar}
        className="fixed z-50 p-2 bg-white rounded-md shadow-md top-4 left-4 lg:hidden"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Steps Tracker to check which forms are completed */}
      <StepsTracker
        steps={steps}
        currentStep={currentStep}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="w-full lg:w-[80%] px-10 py-6">
        <div className="flex justify-end">
          <X className="text-gray-500 cursor-pointer" size={24} />
        </div>
        <div className="flex items-center justify-start mt-8 space-x-8 md:mt-0">
          <p className="font-bold text-[24px] md:text-[36px] text-[#8DC13F]">
            Claim Process
          </p>
          <p className="h-[42px] flex justify-center items-center bg-[#8DC13F] bg-opacity-15 px-3 font-normal text-[23px] text-[#6A9727] rounded-lg">
            <span className="w-2 h-2 bg-[#6A9727] rounded-full mr-3"></span>
            Status
          </p>
        </div>
        <div className="flex flex-col items-start justify-between w-full mt-8 md:items-center md:flex-row">
          <p className="flex items-center text-[28px] md:text-[30px] font-bold">
            <span className="w-9 h-9 flex items-center justify-center bg-[#8DC13F] text-white rounded-full text-xl mr-3">
              1
            </span>
            Bond Information
          </p>
          <p className="text-[28px] md:text-[30px] font-bold text-gray-700">
            Time-Barred Days{" "}
            <span className="text-[#8DC13F] text-[28px] md:text-[36px]">
              {TimeBarredDays} Days
            </span>
          </p>
        </div>
        <div>
          <BondInformations
            formData={BondInformation}
            errors={errors}
            onChange={handleBondInfoInputChange}
            onToggleAgreement={toggleAgreement}
            isFirstFormValid={isFirstFormValid}
          />
        </div>
        <div className="mt-10">
          {/* Claim Information */}
          <div className="w-full mt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("claimInfo")}
            >
              <p className="flex items-center text-[28px] md:text-[30px] font-bold">
                <span className="w-9 h-9 flex items-center justify-center bg-[#8DC13F] text-white rounded-full text-xl mr-3">
                  2
                </span>
                Claim Information
              </p>
              {openSections.claimInfo ? (
                <span className="text-5xl text-gray-500">-</span>
              ) : (
                <span className="text-4xl text-gray-500">+</span>
              )}
            </div>
            {openSections.claimInfo && (
              <ClaimInformation
                claimInformation={claimInformation}
                claimInformationErrors={claimInformationErrors}
                handleBondInfoInputChange={handleClaimInfoInputChange}
                isFirstFormValid={isFirstFormValid}
              />
            )}
          </div>

          {/* Claim Payment */}
          <div className="w-full mt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("claimPayment")}
            >
              <p className="flex items-center text-[28px] md:text-[30px] font-bold">
                <span className="w-9 h-9 flex items-center justify-center bg-[#8DC13F] text-white rounded-full text-xl mr-3">
                  3
                </span>
                Claim Payment
              </p>
              {openSections.claimPayment ? (
                <span className="text-5xl text-gray-500">-</span>
              ) : (
                <span className="text-4xl text-gray-500">+</span>
              )}
            </div>
            {openSections.claimPayment && <ClaimPayment />}
          </div>

          {/* Claim Recovery */}
          <div className="w-full mt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection("claimRecovery")}
            >
              <p className="flex items-center text-[28px] md:text-[30px] font-bold">
                <span className="w-9 h-9 flex items-center justify-center bg-[#8DC13F] text-white rounded-full text-xl mr-3">
                  4
                </span>
                Claim Recovery
              </p>
              {openSections.claimRecovery ? (
                <span className="text-5xl text-gray-500">-</span>
              ) : (
                <span className="text-4xl text-gray-500">+</span>
              )}
            </div>
            {openSections.claimRecovery && <ClaimRecovery />}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            // disabled={!isDataFilled}
            className="px-6 py-2 text-white bg-[#8DC13F] rounded-md hover:bg-green-600"
          >
            Save and Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimPage;
