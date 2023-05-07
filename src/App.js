import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartShowHandler = () => {
    setShowCart(true);
  };
  const cartHideHandler = () => {
    setShowCart(false);
  };

  return (
    <CartContextProvider>
      {showCart && <Cart onHideCart={cartHideHandler} />}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
