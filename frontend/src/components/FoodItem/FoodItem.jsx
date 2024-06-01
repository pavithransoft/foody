import { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";
import PropTypes from "prop-types";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=" "
        />
        {!cartItems[id] ? (
          <CiCirclePlus onClick={() => addToCart(id)} className="add" />
        ) : (
          <div className="food-item-counter">
            <CiCircleMinus
              onClick={() => removeFromCart(id)}
              className="qua-dec"
            />
            <p>{cartItems[id]}</p>
            <CiCirclePlus onClick={() => addToCart(id)} className="qua-inc" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="ratting-star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">
          <span className="dollar">$</span> {price}
        </p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;
