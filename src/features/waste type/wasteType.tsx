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
      <Stepper />{" "}
      <div className="waste-type__content">
        <div className="waste-type__test-info">
          <h1>Waste Type</h1>
          <p>
            This page is just for testing the route validation and the page
            routing
          </p>
          <button onClick={handleNext} className="waste-type__button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteType;
