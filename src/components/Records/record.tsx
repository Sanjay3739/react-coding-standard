import React, { useState } from "react";
import CreateShiftModal from "./Page/recordTable";

const Records: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {" "}
      <div className="p-8">
        {" "}
        <h2 className="text-2xl font-semibold">Records </h2>
        <div className="App">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={openModal}
          >
            Create Shift
          </button>
          <CreateShiftModal isOpen={modalOpen} onClose={closeModal} />
        </div>
      </div>
    </>
  );
};

export default Records;
