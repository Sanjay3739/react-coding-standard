import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import GreenCircleIcon from "../../../assets/svg/greenCircle.svg";
import PurpleCircleIcon from "../../../assets/svg/purpleCircle.svg";
import BlueCircleIcon from "../../../assets/svg/blueCircle.svg";
import PinkCircleIcon from "../../../assets/svg/pinkCircle.svg";
import YellowCircleIcon from "../../../assets/svg/yellowCircle.svg";

const Table: React.FC<{ userData: any }> = ({ userData }) => {
  return (
    <>
      <section className="mt-8">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="table_search_box mr-2">
                  <div className="flex  search items-center border border-300 rounded">
                    <SearchIcon />
                    <input
                      type="text"
                      placeholder="Search"
                      className="border-none outline-none focus:ring-0"
                    />
                  </div>
                  <div className="filter_btn"></div>
                </div>
                <div className="table_search_box">
                  <div className="flex  search items-center border border-300 rounded">
                    <SearchIcon />
                    <input
                      type="text"
                      placeholder="All Regions"
                      className="border-none outline-none focus:ring-0"
                    />
                  </div>
                  <div className="filter_btn"></div>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="text-gray active:bg-indigo-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    All
                  </button>
                  <button
                    className=" text-gray active:bg-indigo-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <div className="flex items-center">
                      <img
                        src={GreenCircleIcon}
                        title="image"
                        className="mr-1"
                      />
                      Patient{" "}
                    </div>
                  </button>
                  <button
                    className=" text-gray active:bg-indigo-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <div className="flex items-center">
                      <img
                        src={YellowCircleIcon}
                        title="image"
                        className="mr-1"
                      />
                      Family/Friends{" "}
                    </div>
                  </button>
                  <button
                    className=" text-gray active:bg-indigo-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <div className="flex items-center">
                      <img
                        src={PinkCircleIcon}
                        title="image"
                        className="mr-1"
                      />
                      Business{" "}
                    </div>
                  </button>
                  <button
                    className=" text-gray active:bg-indigo-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <div className="flex items-center">
                      <img
                        src={BlueCircleIcon}
                        title="image"
                        className="mr-1"
                      />
                      Concierge{" "}
                    </div>
                  </button>
                  <button
                    className=" text-gray active:bg-indigo-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <div className="flex items-center">
                      <img
                        src={PurpleCircleIcon}
                        title="image"
                        className="mr-1"
                      />
                      Vip{" "}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="custom-table">Name</th>
                    <th className="custom-table">Physician Name</th>
                    <th className="custom-table">Date of Service</th>
                    <th className="custom-table">Phone</th>
                    <th className="custom-table">Address</th>
                    <th className="custom-table">Chat With</th>
                    <th className="custom-table">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {userData &&
                    userData.map((user: any) => (
                      <tr key={user.id}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                          {user.first_name}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {user.physician_name}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {user.date_of_service}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {user.phone}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {user.address}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {user.chat_with}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {user.action}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
