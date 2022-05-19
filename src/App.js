import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
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
  onDelete = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  increaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty++;
    this.setState({
      products,
    });
  };
  decreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty--;
    this.setState({
      products,
    });
  };
  getCount = () => {
    let count = 0;
    const { products } = this.state;
    products.forEach((item) => {
      count += item.qty;
    });
    return count;
  };
  render() {
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart
          products={this.state.products}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
