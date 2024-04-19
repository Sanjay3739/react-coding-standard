import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./forgot.scss";
import Auth from "../svg/authentication.svg";
import { useNavigate } from "react-router-dom";
import { ForgotApi } from "../../../services/AuthApi/forgot";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const ForgotForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<any>({});
  const { t } = useTranslation();

  const handleSignUp = () => {
    navigate("/register");
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!email.trim()) {
      newErrors.email = ["Email is required"];
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await ForgotApi(email);
        if (response.success === true) {
          toast.success(response.message);
          navigate(`/`);
        } else {
          toast.error(response.message);
        }
      } catch (error: any) {
        setErrors({ email: [error.message] });
      }
    }
  };

  return (
    <>
      <Box className="bg-green-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-6 forgot_card">
          <div className="flex gap-4">
            <div className="w-full md:w-1/3 flex items-center justify-center image-box">
              <img
                src={Auth}
                alt="Artistic illustration"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <div className="max-w-md mx-auto">
                <h2 className="text-4xl mb-4 h2_text">
                  {t("forgotPassword.forgot")}
                </h2>
                <p className="text-gray-500 mb-4">
                  {" "}
                  {t("forgotPassword.desc1")}
                </p>
                <p className="text-gray-500 mb-6">
                  {" "}
                  {t("forgotPassword.desc2")}
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col auth-form"
                >
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`pl-10 pr-4 py-2 border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } form_input full-width`}
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="absolute svg-box left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-envelope h-5 w-5 text-gray-400"></i>
                      </div>
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex">
                        {errors.email[0]}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="forgot_btn bg-green-500 text-white py-2 px-4 rounded-lg mb-4"
                  >
                    {t("forgotPassword.ResetPassword")}
                  </button>
                  <a 
                    className="text-center text-green-600 hover:text-green-700"
                  >
                    {" "}
                    {t("forgotPassword.notNumber")}{" "}
                    <span onClick={handleSignUp}>
                      {t("forgotPassword.SignUp")}
                    </span>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ForgotForm;
