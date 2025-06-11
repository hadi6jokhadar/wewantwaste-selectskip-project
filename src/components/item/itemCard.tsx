import React from "react";
import { ItemCardProps } from "./itemCard.interface";
import { globalService } from "../../services/globalService";
import "./itemCard.scss";

const ItemCard: React.FC<ItemCardProps> = ({ items, onConfirm }) => {
  const [itemIndex, setItemIndex] = React.useState<number>(0);
  const [isSelected, setIsSelected] = React.useState<boolean>(false);

  // Ensure the permit check step is not clickable initially
  React.useEffect(() => {
    globalService.updateStepClickable(3, false);
  }, []);

  // Reset selection when item changes
  React.useEffect(() => {
    setIsSelected(false);
    globalService.updateStepClickable(3, false);
  }, [itemIndex]);

  if (!items || items.length === 0) {
    return <div className="item-card item-card--empty">No items available</div>;
  }

  const item = items[itemIndex];

  const handlePrevious = () => {
    setItemIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setItemIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };
  const handleSelect = () => {
    if (!isSelected) {
      // When selecting (first click)
      setIsSelected(true);
      // Make the permit check step clickable
      globalService.updateStepClickable(3, true);
    } else {
      // When confirming (second click) - navigate to next step
      if (onConfirm) {
        onConfirm();
      }
    }
  };
  let imageSrc: string = "/small.png";
  if (item.size < 8) {
    imageSrc = "/small.png";
  } else if (item.size >= 8 && item.size < 12) {
    imageSrc = "/medium.png";
  } else if (item.size >= 12) {
    imageSrc = "/large.png";
  }
  return (
    <div className="item-card">
      <div className="item-card__image-container">
        <img src={imageSrc} alt="yard skip size"></img>
      </div>{" "}
      <div className="item-card__details">
        <div className="item-card__details__header">
          {" "}
          <button
            className="item-card__details__header__back-btn"
            onClick={handlePrevious}
            disabled={itemIndex === 0 || items.length <= 1}
          >
            <i className="fas fa-chevron-down"></i>
          </button>
          <span className="item-card__details__header__title">
            {item.getTitle()}
          </span>
          <button
            className="item-card__details__header__next-btn"
            onClick={handleNext}
            disabled={itemIndex === items.length - 1 || items.length <= 1}
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
        <div className="item-card__details__tag item-card__details__tag--hire-period">
          <span className="item-card__details__tag__icon">
            {item.hire_period_days}
          </span>
          <span className="item-card__details__tag__title">
            Day hire period
          </span>
        </div>
        {!item.allows_heavy_waste && (
          <div className="item-card__details__tag item-card__details__tag--warning">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="item-card__details__tag__title">
              Not Allowed For Heavy Waste
            </span>
          </div>
        )}
        {!item.allowed_on_road && (
          <div className="item-card__details__tag item-card__details__tag--warning">
            <i className="fas fa-ban"></i>
            <span className="item-card__details__tag__title">
              Not Allowed On The Road
            </span>
          </div>
        )}
        <div className="item-card__details__price">
          £{Math.round(item.getTotalPrice())}
        </div>
        <div className="item-card__details__footer">
          <button
            className={`item-card__details__footer__button ${
              isSelected
                ? "item-card__details__footer__button--confirm"
                : "item-card__details__footer__button--select"
            }`}
            onClick={handleSelect}
          >
            {isSelected ? "Confirm" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
