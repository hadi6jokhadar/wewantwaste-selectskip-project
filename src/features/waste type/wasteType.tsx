import React from "react";
import "./wasteType.scss"; // Import the SCSS file
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/stepper/stepper";
import { useRouteValidator } from "../../utils";

const WasteType: React.FC = () => {
  const navigate = useNavigate();

  // Validate route access
  useRouteValidator();

  const handleNext = () => {
    navigate("/select-skip");
  };

  return (
    <div className="waste-type">
      <Stepper />
      <div className="waste-type__content">
        <h1>Waste Type</h1>
        {/* Your form or selection UI */}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default WasteType;
