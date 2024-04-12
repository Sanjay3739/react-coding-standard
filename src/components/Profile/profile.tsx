import React from "react";
import "./profile.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Profile: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <div className="flex justify-between  max-w-4xl mx-auto items-center mb-4">
          <h2 className="text-2xl font-semibold">My Profile</h2>

          <Button variant="outlined" startIcon={<ChevronLeftIcon />}>
            Back
          </Button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex justify-end mb-3">
            <button className="border-btn">Request To Admin</button>
          </div>
          <div className="border-b-2 border-gray-200 mb-4">
            <h3 className="text-lg font-semibold mb-2">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-inputs"
                title="input"
              />
              <input
                type="password"
                name="Password"
                placeholder="Password"
                className="form-inputs"
              />
            </div>
            <div className="flex justify-end mb-3 mt-4">
              <button className="border-btn">Reset Password</button>
            </div>
          </div>
          <div className="border-b-2 border-gray-200 mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Physician Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="form-inputs"
                title="input"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="form-inputs"
                title="input"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="form-inputs"
                title="input"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="form-inputs"
                title="input"
              />

              <input
                type="text"
                name="medical_license"
                placeholder="Medical License"
                className="form-inputs"
                title="input"
              />
              <input
                type="number"
                name="npi_number"
                placeholder="NPI Number"
                className="form-inputs"
                title="input"
              />
              <div className="bg-gray-50 ">
                <div className="flex flex-wrap gap-4 items-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2">District Of Columbia</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2">New York</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2">Virginia</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2">Maryland</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Mailing & Billing Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="address-1"
                placeholder="Address-1"
                className="form-inputs"
                title="input"
              />
              <input
                type="text"
                name="address-2"
                placeholder="Address-1"
                className="form-inputs"
                title="input"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-inputs"
                title="input"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="form-inputs"
                title="input"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                className="form-inputs"
                title="input"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="form-inputs"
                title="input"
              />
            </div>
          </div>
          <div className="border-b-2 border-gray-200 mb-4">
            <h3 className="text-lg font-semibold mb-2">Provider Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="form-inputs"
                title="input"
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                className="form-inputs"
                title="input"
              />
              <div className=" image_selector border border-gray-300  content_between_of_div">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="imageInput"
                />
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer flex items-center space-x-2 ml-3 "
                >
                  <span>Select Image</span>
                </label>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                </Button>
              </div>
              <div className="flex items-center ">
                <div className=" image_selector border border-gray-300  content_between_of_div">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="imageInput2"
                  />
                  <label
                    htmlFor="imageInput2"
                    className="cursor-pointer flex items-center space-x-2 ml-3"
                  >
                    <span>Select Image</span>
                  </label>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                  </Button>
                </div>
                <button className="bg-btn content_center_of_div">Create</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 ">
              <h2 className="text-lg text-gray font-semibold">
                Provider Agreement
              </h2>
              <button className="bg-btn  ">Create</button>
            </div>
            <div className="flex items-center gap-5">
              <h2 className="text-lg text-gray  font-semibold">
                HIPAA Compliance
              </h2>
              <button className="bg-btn ">Create</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
