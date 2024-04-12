import React from "react";

interface CreateShiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateShiftModal: React.FC<CreateShiftModalProps> = ({ isOpen, onClose }) => {
  // Add form states and handlers as necessary

  return (
    isOpen ? (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
        <div className="bg-white rounded-lg p-4 max-w-lg w-full mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-700">Create Shift</h2>
            <button onClick={onClose} title='sd'>
              <i className="fas fa-times cursor-pointer"></i>
            </button>
          </div>
          <form className="my-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1" htmlFor="region">Region</label>
              <select className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                <option>Select</option>
                {/* Add region options */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1" htmlFor="physician">Physician</label>
              <select className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                <option>Select</option>
                {/* Add physician options */}
              </select>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-bold mb-1" htmlFor="start">Start</label>
                <input type="time" className="form-input block w-full border-gray-300 rounded-md shadow-sm" defaultValue="03:45" />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-bold mb-1" htmlFor="end">End</label>
                <input type="time" className="form-input block w-full border-gray-300 rounded-md shadow-sm" defaultValue="03:45" />
              </div>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Repeat</span>
              </label>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              {/* Dynamically create checkbox for days */}
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <label key={day} className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Every {day}</span>
                </label>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1" htmlFor="repeat-end">Repeat end</label>
              <select className="form-select block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                <option>2-times</option>
                {/* Add more repeat options */}
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={onClose}>Save</button>
              <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
};

export default CreateShiftModal;


