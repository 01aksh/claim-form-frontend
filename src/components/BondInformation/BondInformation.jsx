/* eslint-disable react/prop-types */

const BondInformation = ({
  formData,
  errors,
  onChange,
  onToggleAgreement,
  isFirstFormValid,
}) => {
  return (
    <div className="w-full my-4">
      {/* Form */}
      <div
        className={`p-4 rounded-lg ${
          !isFirstFormValid && "bg-[#F0F0F0DB] "
        } md:px-6 md:py-10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
          {/* First Column - Row 1 */}
          <div className="flex items-center justify-between font-normal text-[20px]">
            <label className="w-full">Claim No</label>
            <div className="flex justify-start w-full">{formData.claimNo}</div>
          </div>

          {/* Second Column - Row 1 */}
          <div className="flex-between-center">
            <label className="w-full">Claim Date</label>
            <div className="flex justify-start w-full">
              {formData.claimDate}
            </div>
          </div>

          {/* Third Column - Row 1 */}
          <div className="flex-between-center">
            <label className="w-full">Monthly Rent</label>
            <div className="flex justify-start w-full">
              {formData.monthlyRent}
            </div>
          </div>

          {/* First Column - Row 2 */}
          <div className="flex-between-center">
            <label className="w-full">Tenant (ID)/ Name</label>
            <div className="w-full">
              <input
                type="text"
                name="tenantName"
                value={formData.tenantName}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.tenantName && (
                <p className="text-sm text-red-500">{errors.tenantName}</p>
              )}
            </div>
          </div>

          {/* Second Column - Row 2 */}
          <div className="flex-between-center">
            <label className="w-full">Landlord (ID)</label>
            <div className="w-full">
              <input
                type="text"
                name="landlordName"
                value={formData.landlordName}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent bg-red-300 border-b border-black focus:outline-none"
              />
              {errors.landlordName && (
                <p className="text-sm text-red-500">{errors.landlordName}</p>
              )}
            </div>
          </div>

          {/* Third Column - Row 2 */}
          <div className="flex-between-center">
            <label className="w-full">L&L Period</label>
            <div className="w-full">
              <input
                type="text"
                name="lAndLPeriod"
                value={formData.lAndLPeriod}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.lAndLPeriod && (
                <p className="text-sm text-red-500">{errors.lAndLPeriod}</p>
              )}
            </div>
          </div>

          {/* First Column - Row 3 */}
          <div className="flex-between-center">
            <label className="w-full">Mobile No</label>
            <div className="w-full">
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.mobileNo && (
                <p className="text-sm text-red-500">{errors.mobileNo}</p>
              )}
            </div>
          </div>

          {/* Second Column - Row 3 */}
          <div className="flex-between-center">
            <label className="w-full">Email ID</label>
            <div className="w-full">
              <input
                type="email"
                name="emailID"
                value={formData.emailID}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.emailID && (
                <p className="text-sm text-red-500">{errors.emailID}</p>
              )}
            </div>
          </div>

          {/* Third Column - Row 3 - L&L Agreement with toggle */}
          <div className="flex-between-center">
            <label className="w-full">L&L Agreement</label>
            <div className="flex w-full">
              <button
                className={`px-3 py-1 rounded-l-md ${
                  formData.lAndLAgreement
                    ? "bg-[#8DC13F] text-white"
                    : "bg-white text-gray-700 border border-black"
                }`}
                onClick={onToggleAgreement}
              >
                YES
              </button>
              <button
                className={`px-3 py-1 rounded-r-md ${
                  !formData.lAndLAgreement
                    ? "bg-gray-500 text-white"
                    : "bg-white text-gray-700 border border-black"
                }`}
                onClick={onToggleAgreement}
              >
                NO
              </button>
            </div>
          </div>

          {/* First Column - Row 4 */}
          <div className="flex-between-center">
            <label className="w-full">Bond ID</label>
            <div className="w-full">
              <input
                type="text"
                name="bondID"
                value={formData.bondID}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.bondID && (
                <p className="text-sm text-red-500">{errors.bondID}</p>
              )}
            </div>
          </div>

          {/* Second Column - Row 4 */}
          <div className="flex-between-center">
            <label className="w-full">Bond Period</label>
            <div className="w-full">
              <input
                type="text"
                name="bondPeriod"
                value={formData.bondPeriod}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.bondPeriod && (
                <p className="text-sm text-red-500">{errors.bondPeriod}</p>
              )}
            </div>
          </div>

          {/* Third Column - Row 4 */}
          <div className="flex-between-center">
            <label className="w-full">L&L Expiry Date</label>
            <div className="w-full">
              <input
                type="date"
                name="lAndLExpiryDate"
                value={formData.lAndLExpiryDate}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.lAndLExpiryDate && (
                <p className="text-sm text-red-500">{errors.lAndLExpiryDate}</p>
              )}
            </div>
          </div>

          {/* First Column - Row 5 */}
          <div className="flex-between-center">
            <label className="w-full">Bond Version</label>
            <div className="w-full">
              <input
                type="text"
                name="bondVersion"
                value={formData.bondVersion}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.bondVersion && (
                <p className="text-sm text-red-500">{errors.bondVersion}</p>
              )}
            </div>
          </div>

          {/* Second Column - Row 5 */}
          <div className="flex-between-center">
            <label className="w-full">Bond Value</label>
            <div className="w-full">
              <input
                type="text"
                name="bondValue"
                value={formData.bondValue}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
              />
              {errors.bondValue && (
                <p className="text-sm text-red-500">{errors.bondValue}</p>
              )}
            </div>
          </div>

          {/* Row 6 - Dropdowns */}
          <div className="flex-between-center">
            <label className="w-full">Bond Status</label>
            <div className="relative w-full">
              <select
                name="bondStatus"
                value={formData.bondStatus}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent appearance-none focus:outline-none"
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-between-center">
            <label className="w-full">Claim Status</label>
            <div className="relative w-full">
              <select
                name="claimStatus"
                value={formData.claimStatus}
                onChange={onChange}
                className="w-full pb-1 text-gray-600 bg-transparent appearance-none focus:outline-none"
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Rejected">Rejected</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center justify-start pr-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondInformation;
