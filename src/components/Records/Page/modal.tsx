import React from "react";
import CancelSvg from "../../Provider/svg/cancel.svg";

interface CreateShiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateShiftModal: React.FC<CreateShiftModalProps> = ({
  isOpen,
  onClose,
}) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-lg max-w-lg w-full mx-auto">
        <div className="border-top bg-blue-500 flex items-center p-3  justify-between">
          <h1 className="text-lg text-white ">Create Shift</h1>
          <img src={CancelSvg} alt="" onClick={onClose} />
        </div>
        <form className="my-4 p-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="region"
            >
              Region
            </label>
            <select className="form-selects bg-white block w-full mt-1 border-gray-300 rounded-md shadow-sm">
              <option>Select</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="physician"
            >
              Physician
            </label>
            <select className="form-selects block w-full mt-1 border-gray-300 rounded-md shadow-sm">
              <option>Select</option>
            </select>
          </div>
          <div className="flex justify-between gap-4 mb-4">
            <div className="w-1/2">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="start"
              >
                Start
              </label>
              <input
                type="time"
                className="s block w-full border-gray-300 rounded-md shadow-sm"
                defaultValue="03:45"
              />
            </div>
            <div className="w-1/2">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="end"
              >
                End
              </label>
              <input
                type="time"
                className="form-inputs block w-full border-gray-300 rounded-md shadow-sm"
                defaultValue="03:45"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Repeat</span>
            </label>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <label key={day} className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Every {day}</span>
              </label>
            ))}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-1"
              htmlFor="repeat-end"
            >
              Repeat end
            </label>
            <select className="form-selects block w-full mt-1 border-gray-300 rounded-md shadow-sm">
              <option>2-times</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" className="bg-btn" onClick={onClose}>
              Save
            </button>
            <button type="button" className="border-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default CreateShiftModal;
