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
      <Stepper />
      <div className="permit-check__content">
        <h1>Permit Check</h1>
        {/* Your form or selection UI */}
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default PermitCheck;
