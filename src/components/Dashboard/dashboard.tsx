import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import "./dashboard.scss";
import SupportTeam from "../../assets/svg/supportTeam.svg";
import ExportAll from "../../assets/svg/exportAll.svg";
import Export from "../../assets/svg/export.svg";
import CreateRequest from "../../assets/svg/createRequest.svg";
import SendIcon from "../../assets/svg/send.svg";
import Table from "./Page/table";
import ServiceButton from "./Page/serviceBtn";
import { fetchUserDataApi } from "../../services/DashBoard/fetchUserData";
import {
  fetchUserFromIndexedDB,
  getUserTokenFromLocalStorage,
} from "../../store/indexDb";
import { toast } from "react-toastify";

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [token, setToken] = useState<any>(null);
  const userId = getUserTokenFromLocalStorage();

  useEffect(() => {
    async function fetchData() {
      if (userId !== null) {
        const userIdNumber = parseInt(userId, 10);
        if (!isNaN(userIdNumber)) {
          const savedUser = await fetchUserFromIndexedDB(userIdNumber);
          setToken(savedUser.token);
        }
      }
    }
    fetchData();
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const data = await fetchUserDataApi(token);
          toast.success(data.message);
          setUserData(data.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [token]);
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
      <Table userData={userData}/>
    </>
  );
};

export default Dashboard;
