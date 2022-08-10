import React from 'react';
import Cart from '../components/Cart/CartDetails';
import CartTemplate from '../components/Cart';
import Header from '../components/Header';
import style from './App.module.scss';

function App() {
  return (
    <div>
      <Header />
      <CartTemplate />
    </div>
  );
}

export default App;
