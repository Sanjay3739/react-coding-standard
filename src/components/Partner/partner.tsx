import React from "react";
import PartnerTable from "./Page/partnerTable";

const Partner: React.FC = () => {
  return (
    <>
      <div className="p-8">
        {" "}
        <h2 className="text-2xl font-semibold">Vendor(s) </h2>
        <PartnerTable />
      </div>
    </>
  );
};

export default Partner;
