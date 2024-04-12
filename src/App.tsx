import React from "react";
import "../src/styles/App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/layout/loader/Loader";
import Dashboard from "./components/Dashboard/dashboard";
import Header from "./components/layout/header/header";
import LoginForm from "./components/Auth/LoginForm/login";
import Register from "./components/Auth/RegisterForm/register";
import ForgotForm from "./components/Auth/ForgotForm/forgot";
import ResetForm from "./components/Auth/ResetForm/reset";
import Profile from "./components/Profile/profile";
import Provider from "./components/Provider/provider";
import Partner from "./components/Partner/partner";
import Records from "./components/Records/record";
import Access from "./components/Access/access";
import CreatePartner from "./components/Partner/Page/create";

const App: React.FC = () => {
  return (
    <div className="wrapper app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotForm />} />
          <Route path="/reset" element={<ResetForm />} />
          <Route path="/loader" element={<Loader />} />
          <Route
            path="/*"
            element={
              <>
                {" "}
                <Header />
                <div className="dashboard_details">
                  <Routes>
                    <Route path="/dashboard/:id" element={<Dashboard />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/providers/:id" element={<Provider />} />
                    <Route path="/partner/:id" element={<Partner />} />
                    <Route path="/addPartner/:id" element={<CreatePartner />} />
                    <Route path="/records/:id" element={<Records />} />
                    <Route path="/access/:id" element={<Access />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
