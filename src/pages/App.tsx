import React, { useState } from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';

function App() {
  const [products, setProducts] = useState([]);
  const [number, setNumber] = useState(1);

  function increment(){
    return setNumber(number + 1)
  };

  function decrement(){
    if(number > 1){
        return setNumber(number - 1)
    }
    return number;
  };

  return (
    <div>
      <Header number={number}/>
      <Cart
        products={products}
        number={number}
        decrement={decrement}
        increment={increment}
      />
    </div>
  );
}

export default App;
