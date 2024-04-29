import React from "react";

const RecordTable: React.FC = () => {
  return (
    <>
      <section className="mt-8">
        <div className="w-full mx-auto">
          <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="flex flex-wrap mb-0 px-4 py-4">
              <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  title="input"
                  className="w-full form-inputs"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className=" w-full  form-inputs"
                  title="input"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full  form-inputs"
                  title="input"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  title="input"
                  className="w-full form-inputs"
                />
              </div>
            </div>

            <div className="flex justify-end mb-0 px-4 py-3 gap-2">
              <button className="border-btn">clear</button>{" "}
              <button className="bg-btn">Search</button>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      First name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      last Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Email
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Phone Number
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Address
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600"
                        title="checkbox"
                      />
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      /argon/
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      4,569
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      46,53%
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      340
                    </td>
                    <td className="border-t-0 flex flex-wrap items-center gap-3 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button className="border-btn">Explore</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecordTable;
