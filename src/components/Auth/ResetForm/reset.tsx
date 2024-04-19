import React, { useState } from "react";
import "../ForgotForm/forgot.scss";
import Auth from "../svg/authentication.svg";
import { useNavigate } from "react-router-dom";
import { ResetApi } from "../../../services/AuthApi/reset";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const ResetForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const { t } = useTranslation();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  const handleSignIn = () => {
    navigate("/");
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!email.trim()) {
      newErrors.email = ["Email is required"];
    }

    if (!password.trim()) {
      newErrors.password = ["Password is required"];
    }

    if (!ConfirmPassword.trim()) {
      newErrors.ConfirmPassword = ["Confirm Password is required"];
    }

    if (password !== ConfirmPassword) {
      newErrors.ConfirmPassword = ["Passwords do not match"];
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await ResetApi(
          email,
          password,
          ConfirmPassword,
          token
        );
        if (response.success === true) {
          toast.success(response.message);
          navigate(`/`);
        } else {
          toast.error(response.message);
        }
      } catch (error: any) {
        setErrors(error.message);
      }
    }
  };

  return (
    <>
      <div className="bg-green-100 h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-10 forgot_card">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 flex items-center image-box justify-center">
              <img
                src={Auth}
                alt="Artistic illustration"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3 flex items-center justify-center">
              <div className="max-w-md">
                <h2 className="text-4xl mb-2 h2_text">
                  {" "}
                  {t("resetPassword.title")}
                </h2>
                <p className="text-gray-500 mb-3">
                  {" "}
                  {t("resetPassword.desc1")}
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col auth-form "
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
                        value={email}
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
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className={`pl-10 pr-4 py-2 border ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } form_input full-width`}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="absolute svg-box left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-lock h-5 w-5 text-gray-400"></i>
                      </div>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1 flex">
                        {errors.password[0]}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="password"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        className={`pl-10 pr-4 py-2 border ${
                          errors.ConfirmPassword
                            ? "border-red-500"
                            : "border-gray-300"
                        } form_input full-width`}
                        placeholder="Confirm Password"
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <div className="absolute svg-box left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fas fa-lock h-5 w-5 text-gray-400"></i>
                      </div>
                    </div>
                    {errors.ConfirmPassword && (
                      <p className="text-red-500 text-xs mt-1 flex">
                        {errors.ConfirmPassword[0]}
                      </p>
                    )}
                  </div>
                  <button type="submit" className="forgot_btn mb-4">
                    {t("resetPassword.resetPassword")}
                  </button>
                  <a
                    href=""
                    className="text-center text-green-600 hover:text-green-700"
                  >
                    {" "}
                    {t("resetPassword.notNumber")}{" "}
                    <span onClick={handleSignIn}>
                      {t("resetPassword.SignIn")}
                    </span>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetForm;
