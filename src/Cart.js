import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "mobile phone",
          price: 99,
          qty: 4,
          img: "",
          id: 1,
        },
        {
          title: "laptop",
          price: 99,
          qty: 4,
          img: "",
          id: 2,
        },
        {
          title: "heaphone",
          price: 99,
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }
  render() {
    return (
      <div className="cart">
        {this.state.products.map((item) => {
          return <CartItem product={item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
