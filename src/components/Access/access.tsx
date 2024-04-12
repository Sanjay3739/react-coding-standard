import React from "react";
import AccessTable from "./Page/accessTable";

const Access: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl p-8 mx-auto">
        {" "}
        <h2 className="text-2xl font-semibold">Account Access</h2>
        <AccessTable />
      </div>
    </>
  );
};

export default Access;
