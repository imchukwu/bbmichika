import React from "react";
import "./Services.css";
import program_1 from "../../assets/program-a1.png";
import program_2 from "../../assets/program-a2.png";
import program_3 from "../../assets/program-a3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Corporate & Commercial Law</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Dispute Resolution & Litigation</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Real Estate & Property Law</p>
        </div>
      </div>
    </div>
  );
};
export default Services;