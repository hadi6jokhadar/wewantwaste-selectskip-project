import React from "react";
import "./selectSkip.scss"; // Import the SCSS file
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/stepper/stepper";
import { useRouteValidator } from "../../utils";
import { useGetItems } from "../../hooks";

const SelectSkip: React.FC = () => {
  const { items, loading, error, refetch } = useGetItems("NR32", "Lowestoft");

  const navigate = useNavigate();

  // Validate route access
  useRouteValidator();

  const handleNext = () => {
    navigate("/permit-check");
  };
  const handleBack = () => {
    navigate("/weste-type");
  };

  return (
    <div className="select-skip">
      <Stepper />
      <div className="select-skip__content">
        <h1>Select Skip</h1>
        {/* Your form or selection UI */}
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SelectSkip;
