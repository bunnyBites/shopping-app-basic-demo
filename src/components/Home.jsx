import { useState } from "react";
import { CART_ITEMS_MOCK } from "../constants/cartItem.const";
import CartItem from "./CartItem";

export const Home = () => {
  const [cartItems, setCartItems] = useState(CART_ITEMS_MOCK);

  const onManageCartItems = (selectedCartItem) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === selectedCartItem.id) {
        return { ...cartItem, isSelected: !selectedCartItem.isSelected };
      }

      return { ...cartItem };
    });

    setCartItems(updatedCartItems);
  };

  const renderCartItemCountBadge = () => (
    <div className="d-flex justify-content-end">
      <button type="button" className="btn btn-primary position-relative">
        Cart Items
        <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItems.filter((cartItem) => cartItem.isSelected).length}
        </div>
      </button>
    </div>
  );

  return (
    <div className="container">
      <h1>Welcome to the Shopping Cart!</h1>

      {renderCartItemCountBadge()}
      <div className="d-flex align-items-center justify-content-evenly py-5">
        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            <CartItem
              cartImage={cartItem.imgUrl}
              isCartSelected={cartItem.isSelected}
              onManageCartItem={() => onManageCartItems(cartItem)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
