import React from "react";

class CartItem extends React.Component {
  render() {
    const { title, price, qty } = this.props.product;
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
          <div>{title}</div>
          <div>price : {price}</div>
          <div>quantity : {qty}</div>
          <div className="cart-item-actoins">
            <img
              alt="decrease"
              className="action-icons"
              src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
              onClick={this.decreaseQty}
            ></img>
            <img
              alt="increase"
              className="action-icons"
              src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
              onClick={() => this.props.increaseQty(this.props.product)}
            ></img>
            <img
              alt="delete"
              className="action-icons"
              src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
            ></img>
            {/* buttons for the actions */}
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
