import React, { useState } from "react";
import Avatar from "../svg/avatar.svg";
import backgroundImg from "../svg/bg.svg";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../../services/AuthApi/login";
import "../LoginForm/login.scss";
import { useTranslation } from "react-i18next";
import { LoginFormData } from "../../../services/state";
import { toast } from "react-toastify";
import Loader from "../../layout/loader/Loader";
import { saveUserToIndexedDB } from "../../../store/indexDb";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({});
  const { t } = useTranslation();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgot = () => {
    navigate("/forgot");
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.email.trim()) {
      newErrors.email = ["Email is required"];
    }

    if (!formData.password.trim()) {
      newErrors.password = ["Password is required"];
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (validateForm()) {
      setLoading(true); // Show loading indicator only when form is valid
  
      try {
        const response = await LoginApi(formData);
        if (response.success === true && response.status === 201) {
          const user = response.data.user;
          const token = response.data.token;
          saveUserToIndexedDB(user, token);
          toast.success(response.message);
          navigate(`/dashboard/${response.data.user.id}`);
        } else if (response.success === false) {
          toast.error(response.message);
        } else {
          toast.error("An error occurred.");
        }
      } catch (error: any) {
        toast.error("An error occurred.");
        setErrors(error.message);
      } finally {
        setLoading(false); 
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="login-container">
        <div className="img">
          <span className="signIn">
            {t("login.text1")}
            <br />
            <span className="let_us">{t("login.getStarted")}</span>
          </span>
          <div className="flex items-start register-btn-box">
            <input
              type="submit"
              onClick={handleRegister}
              className="Register_btn mb-5"
              value="Register"
            />
          </div>
          <img className="background_img" src={backgroundImg} alt="image" />
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit} className="auth_form">
            <img className="avatar" src={Avatar} alt="image" />
            <h2 className="title">{t("login.welcome")}</h2>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`pl-10 pr-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } form_input input-width`}
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
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
                  } form_input input-width`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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
            <a className="forgot_link" href="" onClick={handleForgot}>
              {t("login.forgotPassword")}
            </a>
            <input type="submit" className="submit_btn" value="Login" />
            <div className="card-info">
              <p>
                {t("login.desc1")} <a href="">{t("login.terms")}</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
