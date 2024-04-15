import React, { useState } from "react";
import Avatar from "../svg/avatar.svg";
import "../RegisterForm/register.scss";
import Mobile from "../svg/mobile.svg";
import { useNavigate } from "react-router-dom";
import { RegisterApi } from "../../../services/AuthApi/register";
import { useTranslation } from "react-i18next";
import { RegisterFormData } from "../../../services/state";
import Loader from "../../layout/loader/Loader";
import { toast } from "react-toastify";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState<any>({});
  const { t } = useTranslation();

  const handleLogin = () => {
    navigate("/");
  };

  const validateForm = () => {
    const newErrors: any = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!formData.userName.trim()) {
      newErrors.userName = ["User Name is required"];
    }

    if (!formData.email.trim()) {
      newErrors.email = ["Email is required"];
    }

    if (!formData.phone.trim()) {
      newErrors.phone = ["Phone Number is required"];
    }

    if (!formData.password.trim()) {
      newErrors.password = ["Password is required"];
    }
    // if (!passwordRegex.test(formData.password.trim())) {
    //   newErrors.password = [
    //     "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    //   ];
    // }

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
    setLoading(true);
    if (validateForm()) {
      try {
        const response = await RegisterApi(formData);
        if (response?.data.success === true && response.data.status === 201) {
          toast.success(response?.data.message);
          navigate("/");
        }
      } catch (error: any) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <>
      {loading && <Loader />}
      <div className="register-container">
        <div className="form-content">
          <form onSubmit={handleSubmit} className="auth_form">
            <img className="avatar" src={Avatar} title="image" />
            <h2 className="title">{t("register.welcome")}</h2>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  title="userName"
                  name="userName"
                  className={`pl-10 pr-4 py-2 border ${
                    errors.userName ? "border-red-500" : "border-gray-300"
                  } form_input input-width`}
                  placeholder="Username"
                  value={formData.userName}
                  onChange={handleChange}
                />
                <div className="absolute svg-box left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user h-5 w-5 text-gray-400"></i>
                </div>
              </div>
              {errors.userName && (
                <p className="text-red-500 text-xs mt-1 flex">
                  {errors.userName[0]}
                </p>
              )}
            </div>
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
              )}{" "}
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="number"
                  title="phone"
                  name="phone"
                  className={`pl-10 pr-4 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } form_input input-width`}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Mobile Number"
                />
                <div className="absolute svg-box left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-mobile-alt h-5 w-5 text-gray-400"></i>
                </div>
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex">
                  {errors.phone[0]}
                </p>
              )}{" "}
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
              )}{" "}
            </div>
            <a className="login_link" href="" onClick={handleLogin}>
              {t("register.loginHere")}
            </a>
            <input type="submit" className="submit_btn" value="Register" />
            <div className="card-info">
              <p>
                {t("register.desc1")} <a href="">{t("register.terms")} </a>
              </p>
            </div>
          </form>
        </div>
        <div className="img ">
          <span className="signIn sign-info">
            {t("register.SignUp")}
            <br />
            <span className="let_us">
              {" "}
              {t("register.getStarted")} <br /> {t("register.accountCreate")}
            </span>
          </span>
          <img className="background-img" src={Mobile} title="image" />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
