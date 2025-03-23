/* eslint-disable react/prop-types */

const ClaimInformation = ({
  claimInformation,
  claimInformationErrors,
  handleChange,
  isFirstFormValid,
}) => {
  return (
    <>
      <div>
        <div className="w-full my-4">
          {/* Form */}
          <div
            className={`p-4 border ${
              isFirstFormValid && "bg-[#F0F0F0DB] "
            }  border-black rounded-lg md:px-6 md:py-10`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-8">
              {/* Check-In Date */}
              <div className=" flex flex-col justify-between font-normal text-[20px]">
                <label className="w-full">Check-In Date</label>
                <div className="w-full">
                  <input
                    type="date"
                    name="checkInDate"
                    value={claimInformation.checkInDate}
                    onChange={handleChange}
                    className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
                  />
                  {claimInformationErrors.checkInDate && (
                    <p className="text-sm text-red-500">
                      {claimInformationErrors.checkInDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Check-Out Date */}
              <div className=" flex flex-col justify-between font-normal text-[20px]">
                <label className="w-full">Check-Out Date</label>
                <div className="w-full">
                  <input
                    type="date"
                    name="checkOutDate"
                    value={claimInformation.checkOutDate}
                    onChange={handleChange}
                    className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
                  />
                  {claimInformationErrors.checkOutDate && (
                    <p className="text-sm text-red-500">
                      {claimInformationErrors.checkOutDate}
                    </p>
                  )}
                </div>
              </div>

              <div className=" flex flex-col justify-between font-normal text-[20px]">
                <label className="w-full">Stay Days</label>
                <div className="w-full">
                  <input
                    type="text"
                    name="stayDays"
                    value={claimInformation.stayDays}
                    onChange={handleChange}
                    placeholder="XX Days"
                    className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
                  />
                  {claimInformationErrors.stayDays && (
                    <p className="text-sm text-red-500">
                      {claimInformationErrors.stayDays}
                    </p>
                  )}
                </div>
              </div>

              {/* Check-Out Notice Date */}
              <div className=" flex flex-col justify-between font-normal text-[20px]">
                <label className="w-full">Check-Out Notice Date</label>
                <div className="w-full">
                  <input
                    type="date"
                    name="checkOutNoticeDate"
                    value={claimInformation.checkOutNoticeDate}
                    onChange={handleChange}
                    className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
                  />

                  {claimInformationErrors.checkOutNoticeDate && (
                    <p className="text-sm text-red-500">
                      {claimInformationErrors.checkOutNoticeDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Lockin Period (L&L) */}
              <div className=" flex flex-col justify-between font-normal text-[20px]">
                <label className="w-full">Lockin Period (L&L)</label>
                <div className="w-full">
                  <input
                    type="text"
                    name="lockInPeriod"
                    value={claimInformation.lockInPeriod}
                    onChange={handleChange}
                    placeholder="XX Days"
                    className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
                  />
                  {claimInformationErrors.lockInPeriod && (
                    <p className="text-sm text-red-500">
                      {claimInformationErrors.lockInPeriod}
                    </p>
                  )}
                </div>
              </div>

              {/* Notice Period */}
              <div className=" flex flex-col justify-between font-normal text-[20px]">
                <label className="w-full">Notice Period (L&L)</label>
                <div className="w-full">
                  <input
                    type="text"
                    name="noticePeriod"
                    value={claimInformation.noticePeriod}
                    onChange={handleChange}
                    placeholder="XX Days"
                    className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
                  />
                  {claimInformationErrors.noticePeriod && (
                    <p className="text-sm text-red-500">
                      {claimInformationErrors.noticePeriod}
                    </p>
                  )}
                </div>
              </div>

              {/* Breach in Lock-In Period Days */}
              <div className=" flex flex-col justify-between font-normal text-[20px]">
                <label className="w-full">Breach in Lock-In Period Days</label>
                <div className="w-full">
                  <input
                    type="text"
                    name="breachLockInDays"
                    value={claimInformation.breachLockInDays}
                    onChange={handleChange}
                    placeholder="XX Days"
                    className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
                  />
                  {claimInformationErrors.breachLockInDays && (
                    <p className="text-sm text-red-500">
                      {claimInformationErrors.breachLockInDays}
                    </p>
                  )}
                </div>
              </div>

              {/* Breach in Notice Period Days */}
              <div className=" flex flex-col justify-between font-normal text-[20px]">
                <label className="w-full">Breach in Notice Period Days</label>
                <div className="w-full">
                  <input
                    type="text"
                    name="breachNoticeDays"
                    value={claimInformation.breachNoticeDays}
                    onChange={handleChange}
                    placeholder="XX Days"
                    className="w-full pb-1 text-gray-600 bg-transparent border-b border-black focus:outline-none"
                  />
                  {claimInformationErrors.breachNoticeDays && (
                    <p className="text-sm text-red-500">
                      {claimInformationErrors.breachNoticeDays}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
        </div>
      </div>
    </>
  );
};

export default ClaimInformation;
