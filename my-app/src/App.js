import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CartContext from './CartContext/CartContext';

import LoginForm from './components/login';
import Home from "./components/Home"
import Cart from './components/Cart';

class App extends Component {
  state = {
    cartList: [],
  };

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList})
  }

  addCartItem = (product) => {
    const { cartList } = this.state;
    const productObject = cartList.find((eachCartItem) => eachCartItem.id === product.id);

    if (productObject) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((eachCartItem) => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity;
            return { ...eachCartItem, quantity: updatedQuantity };
          }
          return eachCartItem;
        }),
      }));
    } else {
      const updatedCartList = [...cartList, product];
      this.setState({ cartList: updatedCartList });
    }
  };

  render() {
    const { cartList } = this.state;

    return (
     
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
        }}
      >
        <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={Home} />
          <Route exact path="/cart" component={Cart} />
          
        </Switch>
      </CartContext.Provider>
  
    );
  }
}

export default App;
