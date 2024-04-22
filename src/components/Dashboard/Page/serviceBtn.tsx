import React from "react";
import NewIcon from "../../../assets/svg/new.svg";
import ManIcon from "../../../assets/svg/man.svg";
import ActiveIcon from "../../../assets/svg/circleRight.svg";
import Watch from "../../../assets/svg/watch.svg";
import CloseIcon from "../../../assets/svg/userMessage.svg";
import DollarIcon from "../../../assets/svg/dollar.svg";

const ServiceButton: React.FC = () => {
  return (
    <>
      <div className="service_container">
        <div className="box new_container">
          <div className="new_box">
            <span className="svg_text class_new">
              <img src={NewIcon} title="image" /> NEW
            </span>
            <span className="box_text">
              <b>1425</b>{" "}
            </span>
          </div>
        </div>
        <div className="box pending_container">
          <div className="pending_box">
            <span className="svg_text class_new">
              <img src={ManIcon} title="image" /> PENDING
            </span>
            <span className="box_text">
              <b>85</b>{" "}
            </span>
          </div>
        </div>
        <div className="box active_container">
          <div className="active_box">
            <span className="svg_text class_new">
              <img src={ActiveIcon} title="image" />
              ACTIVE
            </span>
            <span className="box_text">
              <b>85</b>{" "}
            </span>
          </div>
        </div>
        <div className="box conclude_container">
          <div className="conclude_box">
            <span className="svg_text class_new">
              <img src={Watch} title="image" />
              CONCLUDE
            </span>
            <span className="box_text">
              <b>1185</b>{" "}
            </span>
          </div>
        </div>
        <div className="box close_container">
          <div className="close_box">
            <span className="svg_text class_new">
              <img src={CloseIcon} title="image" />
              TO CLOSE
            </span>
            <span className="box_text">
              <b>45585</b>{" "}
            </span>
          </div>
        </div>
        <div className="box unpaid_container">
          <div className="unpaid_box">
            <span className="svg_text class_new">
              <img src={DollarIcon} title="image" />
              UNPAID
            </span>
            <span className="box_text">
              <b>8522</b>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceButton;
