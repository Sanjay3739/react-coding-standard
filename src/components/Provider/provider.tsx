import React from "react";
import ProviderTable from "./Page/providerTable";
import "./provider.scss";

const App: React.FC = () => {
  return (
    <>
      {" "}
      <div className="p-8">
        {" "}
        <h2 className="text-2xl font-semibold">providers </h2>
        <ProviderTable />
      </div>
    </>
  );
};

export default App;
