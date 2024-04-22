// ProviderModel.tsx
import React from "react";
import CancelSvg from "../../../assets/svg/cancel.svg";

interface ProviderModelProps {
  showModal: boolean;
  closeModal: () => void;
}

const ProviderModel: React.FC<ProviderModelProps> = ({
  showModal,
  closeModal,
}) => {
  return (
    <>
      <div>
        {showModal && (
          <div className="modal-container">
            <div className="modal bg-white  rounded-lg shadow-lg m-4  max-h-full">
              <div className="border-top bg-blue-500 flex items-center p-3  justify-between">
                <h1 className="text-lg text-white ">Contact Your Provider</h1>
                <img src={CancelSvg} alt="" onClick={closeModal} />
              </div>
              <div className="p-8">
                <div className="mb-4 text-left ">
                  <p className="mb-2">Choose communication to send message</p>
                  <div className="mb-2">
                    <input
                      type="radio"
                      id="sms"
                      name="contact"
                      value="sms"
                      className="mr-2"
                    />
                    <label htmlFor="sms">SMS</label>
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      id="email"
                      name="contact"
                      value="email"
                      className="mr-2"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="mb-4">
                    <input
                      type="radio"
                      id="both"
                      name="contact"
                      value="both"
                      className="mr-2"
                    />
                    <label htmlFor="both">Both</label>
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-btn">Send</button>
                  <button onClick={closeModal} className="border-btn">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProviderModel;
