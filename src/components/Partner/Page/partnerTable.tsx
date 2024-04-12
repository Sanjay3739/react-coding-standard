import React from "react";
import { Button, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const PartnerTable: React.FC = () => {
  return (
    <>
      <section className="mt-8">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex justify-between">
                <div className="flex flex-wrap gap-2">
                  <div className="table_search_box">
                    <div className="flex p-1 search items-center border border-300 rounded">
                      <SearchIcon />
                      <input
                        type="text"
                        placeholder="All Regions"
                        className="border-none outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                  <div className="table_search_box mr-2">
                    <Select
                      placeholder="Select a Car…"
                      sx={{ width: 350 }}
                      startAdornment={<SearchIcon />}
                    >
                      <MenuItem value="porsche">Porsche</MenuItem>
                      <MenuItem value="lexus">Lexus</MenuItem>
                      <MenuItem value="land rover">Land Rover</MenuItem>
                      <MenuItem value="toyota">Toyota</MenuItem>
                      <MenuItem value="bugatti">Bugatti</MenuItem>
                    </Select>
                  </div>
                </div>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  Add Business
                </Button>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Profession
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Business Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Email
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Fax Number
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Phone Number
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Business Contact
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
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      340
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      46,53%
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      340
                    </td>
                    <td className="border-t-0 flex flex-wrap items-center gap-3 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Button variant="outlined">Edit</Button>
                      <Button variant="outlined">Delete</Button>
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

export default PartnerTable;
