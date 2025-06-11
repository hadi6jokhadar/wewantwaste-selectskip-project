import React from "react";
import { ItemCardProps, ItemClass } from "./itemCard.interface";

const ItemCard: React.FC<ItemCardProps> = ({ items }) => {
  const [item, setItem] = React.useState<ItemClass>(items[0]);

  let imageSrc: string = "./public/small.png";
  if (item.size < 8) {
    imageSrc = "./public/small.png";
  } else if (item.size >= 8 && item.size < 12) {
    imageSrc = "./public/medium.png";
  } else if (item.size >= 12) {
    imageSrc = "./public/large.png";
  }
  return (
    <div className="item-card">
      <div className="item-card__image-container">
        <img src={imageSrc} alt="yard skip size"></img>
      </div>
      <div className="item-card__details">
        <div className="item-card__details__header">
          <span className="item-card__details__header__back-btn"></span>
          <span className="item-card__details__header__title">
            {item.getTitle()}
          </span>
          <span className="item-card__details__header__next-btn"></span>
        </div>
        <div className="item-card__details__tag">
          <span className="item-card__details__tag__icon">
            {item.hire_period_days}
          </span>
          <span className="item-card__details__tag__title">
            Day hire period
          </span>
        </div>
        <div className="item-card__details__tag">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <span className="item-card__details__tag__title">
            Not Allowed For Heavy Waste
          </span>
        </div>
        <div className="item-card__details__tag">
          <i className="fa-solid fa-ban"></i>
          <span className="item-card__details__tag__title">
            Not Allowed On The Road
          </span>
        </div>
        <span className="item-card__details__price">
          £{item.getTotalPrice()}
        </span>
        <div className="item-card__details__footer">
          <span className="item-card__details__footer__select"></span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
