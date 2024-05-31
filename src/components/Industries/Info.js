import React from "react";
import Footer from "../LandingPage/Footer";


const Info = (props) => {
  return (
    <div className="container">
      <h6 className="text-center mt-5">
       {props.info.infoHead}
      </h6>
      <div className="row mt-5">
        <div className="col-sm-8">
          <h3>
            {props.info.leader}
          </h3>
          <p className="text-justify">
            {props.info.para}
          </p>
        </div>
        <div className="col-sm-4 text-center m-auto">
       {props.info.faFirst}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-4 text-center m-auto">
        {props.info.faSecond}
        </div>
        <div className="col-sm-8">
          <h3>
            {props.info.softwareServiceHead}
          </h3>
          <p className="text-justify">
           {props.info.softwareServicePara}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Info;
