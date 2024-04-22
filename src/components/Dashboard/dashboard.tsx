import React from "react";
import { Button, Stack } from "@mui/material";
import "./dashboard.scss";
import SupportTeam from "../../assets/svg/supportTeam.svg";
import ExportAll from "../../assets/svg/exportAll.svg";
import Export from "../../assets/svg/export.svg";
import CreateRequest from "../../assets/svg/createRequest.svg";
import SendIcon from "../../assets/svg/send.svg";
import Table from "./Page/table";
import ServiceButton from "./Page/serviceBtn";

const Dashboard: React.FC = () => {
  return (
    <>
      <ServiceButton />
      <div className="box_btn">
        <span>Patients</span>
        <div>
          <Stack spacing={1} direction="row">
            <Button variant="contained" className="button custom-button">
              <img src={SendIcon} title="image" /> Send Link
            </Button>
            <Button variant="contained" className="button custom-button">
              <img src={CreateRequest} title="image" /> Create Request
            </Button>{" "}
            <Button variant="contained" className="button custom-button">
              <img src={Export} title="image" /> Export
            </Button>{" "}
            <Button variant="contained" className="button custom-button">
              <img src={ExportAll} title="image" />
              Export All
            </Button>
            <Button variant="contained" className="button custom-button">
              <img src={SupportTeam} title="image" />
              Request DTY Support
            </Button>
          </Stack>
        </div>
      </div>{" "}
      <Table />
    </>
  );
};

export default Dashboard;
