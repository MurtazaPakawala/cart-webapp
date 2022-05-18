import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            style={{
              height: 110,
              width: 110,
              borderRadius: 4,
              background: "#ccc",
            }}
          />
        </div>
        <div className="right-block">
          <div>phone</div>
          <div>Rs 999</div>
          <div>qnt:5</div>
          <div className="cart-item-actoins">
            {/* buttons for the actions */}
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
