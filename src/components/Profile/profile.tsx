import React from "react";
import "./profile.scss";
import BackIcon from "./svg/back.svg";

const Profile: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <div className="flex justify-between  max-w-4xl mx-auto items-center mb-4">
          <h2 className="text-2xl font-semibold">My Profile</h2>
          <button className="border-2 border-blue-500 flex justify-between items-center text-blue-500 py-2 px-4 rounded transition duration-300 w-full sm:w-auto">
            <img src={BackIcon} alt="Back" className="mr-2" />
            Button
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex justify-end mb-3">
            <button className="border-2 border-blue-500 py-2 px-4 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
              Request To Admin
            </button>
          </div>
          <div className="border-b-2 border-gray-200 mb-4">
            <h3 className="text-lg font-semibold mb-2">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                title="input"
              />
              <input
                type="password"
                name="Password"
                placeholder="Password"
                className="form-input"
              />
            </div>
            <div className="flex justify-end mb-3 mt-4">
              <button className="border-2 border-blue-500 py-2 px-4 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
                Reset Password
              </button>
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
                className="form-input"
                title="input"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="form-input"
                title="input"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="form-input"
                title="input"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="form-input"
                title="input"
              />

              <input
                type="text"
                name="medical_license"
                placeholder="Medical License"
                className="form-input"
                title="input"
              />
              <input
                type="number"
                name="npi_number"
                placeholder="NPI Number"
                className="form-input"
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
                className="form-input"
                title="input"
              />
              <input
                type="text"
                name="address-2"
                placeholder="Address-1"
                className="form-input"
                title="input"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-input"
                title="input"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="form-input"
                title="input"
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                className="form-input"
                title="input"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="form-input"
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
                className="form-input"
                title="input"
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                className="form-input"
                title="input"
              />
              <div className=" image_selector border border-gray-300  flex items-center justify-between">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="imageInput"
                />
                <label
                  htmlFor="imageInput"
                  className="cursor-pointer flex items-center space-x-2 ml-3"
                >
                  <span>Select Image</span>
                </label>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Upload
                </button>
              </div>
              <div className="flex items-center ">
                <div className=" image_selector border border-gray-300  flex items-center justify-between">
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
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Upload
                  </button>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 ">
              <h2 className="text-lg text-gray font-semibold">Provider Agreement</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
              </button>
            </div>
            <div className="flex items-center gap-5">
              <h2 className="text-lg text-gray  font-semibold">HIPAA Compliance</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
