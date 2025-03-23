import { useState } from "react";

const ClaimRecovery = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      paymentDate: "",
      amount: "300",
      utrChequeNo: "123456",
      bankName: "Bank A",
      tenantToLL: "Yes",
      egaroToAll: "Yes",
      tat: "Yes",
      type: "Type A",
      advise: "Advise 1",
    },
    {
      id: 2,
      paymentDate: "",
      amount: "300",
      utrChequeNo: "654321",
      bankName: "Bank B",
      tenantToLL: "Yes",
      egaroToAll: "No",
      tat: "Yes",
      type: "Type B",
      advise: "Advise 2",
    },
    {
      id: 3,
      paymentDate: "",
      amount: "300",
      utrChequeNo: "987654",
      bankName: "Bank C",
      tenantToLL: "Yes",
      egaroToAll: "No",
      tat: "Yes",
      type: "Type C",
      advise: "Advise 3",
    },
  ]);

  // Handle dropdown change
  const handleDropdownChange = (id, field, value) => {
    setTableData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div className="w-full my-4">
      {/* Table */}
      <div className="border border-black rounded-lg md:px-6 md:py-10">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="text-xl font-bold">
                <th className="text-center">Payment Date</th>
                <th>Amount</th>
                <th className="p-2">UTR/ Cheque No.</th>
                <th className="p-2">Bank Name</th>
                <th className="p-2">Tenant to LL</th>
                <th className="p-2">Egaro to All</th>
                <th className="p-2">TAT</th>
                <th className="p-2">Type</th>
                <th className="p-2">Advise</th>
              </tr>
            </thead>
            <tbody className="text-xl font-normal">
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="p-2 text-center">{row.paymentDate}</td>
                  <td className="p-2 text-center">₹ {row.amount}</td>
                  <td className="p-2 text-center">{row.utrChequeNo}</td>
                  <td className="p-2 text-center">{row.bankName}</td>
                  <td className="p-2 text-center">
                    <select
                      value={row.tenantToLL}
                      onChange={(e) =>
                        handleDropdownChange(
                          row.id,
                          "tenantToLL",
                          e.target.value
                        )
                      }
                      className="w-full p-1 border rounded"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <select
                      value={row.egaroToAll}
                      onChange={(e) =>
                        handleDropdownChange(
                          row.id,
                          "egaroToAll",
                          e.target.value
                        )
                      }
                      className="w-full p-1 border rounded"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <select
                      value={row.tat}
                      onChange={(e) =>
                        handleDropdownChange(row.id, "tat", e.target.value)
                      }
                      className="w-full p-1 border rounded"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td className="p-2 text-center">{row.type}</td>
                  <td className="p-2 text-center">{row.advise}</td>
                </tr>
              ))}
              <tr className="p-6 border border-black"></tr>
              <tr className="font-bold text-[23px] p-2">
                <td>
                  <label>Total Recovery</label>
                </td>
                <td className="text-center">₹300</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">-₹100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClaimRecovery;
