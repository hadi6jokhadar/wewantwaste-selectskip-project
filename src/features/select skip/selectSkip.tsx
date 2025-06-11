import React from "react";
import "./selectSkip.scss"; // Import the SCSS file
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/stepper/stepper";
import { useRouteValidator } from "../../utils";
import { useGetItems } from "../../hooks";
import ItemCard from "../../components/item/itemCard";

const SelectSkip: React.FC = () => {
  const { items, loading, error, refetch } = useGetItems("NR32", "Lowestoft");
  const [selected, setSelected] = React.useState<boolean>(false);

  // console.log("Loading:", loading);
  // console.log("Items:", items);

  const navigate = useNavigate();

  // Validate route access
  useRouteValidator();

  const handleNext = () => {
    navigate("/permit-check");
  };
  const handleBack = () => {
    navigate("/weste-type");
  };
  const updateSetSelected = (value: boolean) => {
    setSelected(value);
    console.log("Selected state changing ", value);
  };

  return (
    <div className="select-skip">
      <Stepper />
      <div className="select-skip__content">
        <ItemCard
          onSelected={updateSetSelected}
          items={items}
          onConfirm={handleNext}
        />
      </div>
      {selected && (
        <span className="select-skip__note">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </span>
      )}
    </div>
  );
};

export default SelectSkip;
