import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        {/* <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }} */}
        {/* /> */}
      </div>
      <div className="about-right">
        <h3>ABOUT BBMICHIKA AND ASSOCIATES</h3>
        <h2>Legal Practitioners</h2>
        <h3>The Firm</h3>
        <p>
          The law firm of B. B. Michika And Associates is registered with the
          Corporate Affairs Commission, to inter alia carry on General Legal
          Practice, Legal Consultancy and Ancillary services. The Corporate Head
          office of the firm is situate at No. 22, Sa’adu Zungur Street, 4th
          Avenue, Gwarimpa II Estate, Abuja with offices in Yola, Adamawa State.
        </p>
        <h3>MISSION STATEMENT</h3>
        <p>
          To build an efficient and effective law practice, global in outlook,
          anchored on professionalism with an ingrained commitment to integrity,
          prudence and an uncompromising quality in service delivery.
        </p>
        <h3>NATURE OF PRACTICE</h3>
        <p>
          The pracetice of the firm is compartmentalized into
          two broad divisions, namely: General practice and Commercial practice. <p></p>
          <p><strong>General Practice:</strong> Advocacy, Civil Law, Criminal law, Human
          Rights/Constitutional Law and sundry legal services connected thereto.
          </p>
          <p><strong>Commercial Practice:</strong> Arbitration, Conciliation, Mortgages, Leases,
          Processing of and Registration of Title Documents to land for both
          Corporate and Individual persons, Company Registrations and
          Regularization, Agreements/Commercial law practices, searches,
          trademark, patents, and mergers/acquisitions etc.
          </p>
        </p>
      </div>
    </div>
  );
};
export default About;
