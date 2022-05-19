import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div className="cart">
      {props.products.map((item) => {
        return (
          <CartItem
            product={item}
            key={item.id}
            increaseQty={props.increaseQty}
            decreaseQty={props.decreaseQty}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};

export default Cart;
