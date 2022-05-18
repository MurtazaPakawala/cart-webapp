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
  increaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty++;
    this.setState({
      products,
    });
  };
  render() {
    return (
      <div className="cart">
        {this.state.products.map((item) => {
          return (
            <CartItem
              product={item}
              key={item.id}
              increaseQty={this.increaseQty}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
