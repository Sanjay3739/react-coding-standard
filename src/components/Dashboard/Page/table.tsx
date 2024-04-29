import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import GreenCircleIcon from "../../../assets/svg/greenCircle.svg";
import PurpleCircleIcon from "../../../assets/svg/purpleCircle.svg";
import BlueCircleIcon from "../../../assets/svg/blueCircle.svg";
import PinkCircleIcon from "../../../assets/svg/pinkCircle.svg";
import YellowCircleIcon from "../../../assets/svg/yellowCircle.svg";
import Pagination from "./dashboardPagination";

const Table: React.FC<{ userData: any }> = ({ userData }) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(7);
  const [sortedField, setSortedField] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  useEffect(() => {
    setFilteredData(userData || []);
  }, [userData]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user: any) =>
        user.first_name && user.first_name.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset current page when search term changes
  };

  const handleSort = (field: string) => {
    const order = sortedField === field && sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...filteredData].sort((a, b) => {
      const valueA = a[field] ?? "";
      const valueB = b[field] ?? "";
      return order === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });
    setFilteredData(sorted);
    setSortedField(field);
    setSortOrder(order);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className="mt-8">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="table_search_box mr-2">
                  <div className="flex search items-center border border-300 rounded">
                    <SearchIcon />
                    <input
                      type="text"
                      placeholder="Search"
                      className="border-none outline-none focus:ring-0"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                  <div className="filter_btn"></div>
                </div>
                <div className="table_search_box">
                  <div className="flex search items-center border border-300 rounded">
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
                        alt="green"
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
                        alt="yellow"
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
                        alt="pink"
                      />
                      Business{" "}
                    </div>
                  </button>
                  <button
                    className="text-gray active:bg-indigo-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <div className="flex items-center">
                      <img
                        src={BlueCircleIcon}
                        title="image"
                        className="mr-1"
                        alt="blue"
                      />
                      Concierge{" "}
                    </div>
                  </button>
                  <button
                    className="text-gray active:bg-indigo-600 text-xs font-bold  px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <div className="flex items-center">
                      <img
                        src={PurpleCircleIcon}
                        title="image"
                        className="mr-1"
                        alt="purple"
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
                    <th
                      onClick={() => handleSort("first_name")}
                      className="cursor-pointer custom-table"
                    >
                      Name
                    </th>
                    <th
                      onClick={() => handleSort("physician_name")}
                      className="cursor-pointer custom-table"
                    >
                      Physician Name
                    </th>
                    <th
                      onClick={() => handleSort("date_of_service")}
                      className="cursor-pointer custom-table"
                    >
                      Date of Service
                    </th>
                    <th
                      onClick={() => handleSort("phone")}
                      className="cursor-pointer custom-table"
                    >
                      Phone
                    </th>
                    <th
                      onClick={() => handleSort("address")}
                      className="cursor-pointer custom-table"
                    >
                      Address
                    </th>
                    <th
                      onClick={() => handleSort("chat_with")}
                      className="cursor-pointer custom-table"
                    >
                      Chat With
                    </th>
                    <th
                      onClick={() => handleSort("action")}
                      className="cursor-pointer custom-table"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems &&
                    currentItems.map((user: any) => (
                      <tr key={user.id}>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
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
              <hr className="mt-3" />
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                filteredData={filteredData}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
