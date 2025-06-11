import React from "react";
import "./permitCheck.scss"; // Import the SCSS file
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/stepper/stepper";
import { useRouteValidator } from "../../utils";

const PermitCheck: React.FC = () => {
  const navigate = useNavigate();

  // Validate route access
  useRouteValidator();

  const handleBack = () => {
    navigate("/select-skip");
  };

  return (
    <div className="permit-check">
      <Stepper />{" "}
      <div className="permit-check__content">
        <div className="permit-check__test-info">
          <h1>Permit Check</h1>
          <p>
            This page is just for testing the route validation and the page
            routing
          </p>
          <button onClick={handleBack} className="permit-check__button">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermitCheck;
