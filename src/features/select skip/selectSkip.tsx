import React from "react";
import "./selectSkip.scss"; // Import the SCSS file
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/stepper/stepper";
import { useRouteValidator } from "../../utils";
import { useGetItems } from "../../hooks";
import ItemCard from "../../components/item/itemCard";

const SelectSkip: React.FC = () => {
  const { items, loading, error, refetch } = useGetItems("NR32", "Lowestoft");

  console.log("Loading:", loading);
  console.log("Items:", items);

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
        <ItemCard items={items} />
      </div>
    </div>
  );
};

export default SelectSkip;
