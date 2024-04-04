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
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  {/* <Route path="/profile" element={<Account />} /> */}
                </Routes>
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
