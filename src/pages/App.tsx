import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import { productList } from '../assets/products/products';
import Footer from '../components/Footer';

function App() {
  const [products, setProducts] = useState(productList);
  const [recommendedProducts, setRecommendedProducts] = useState(productList);
  const [number, setNumber] = useState(1);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = productList.length / 4 - 1;

  function increment(){
    return setNumber(number + 1)
  };

  function decrement(){
    if(number > 1){
        return setNumber(number - 1)
    }
    return number;
  };
  
  function goToNextIndex(){
    carouselIndex !== maxIndex ? setCarouselIndex(previousCarouselIndex => previousCarouselIndex + 1) : setCarouselIndex(0);
  }

  function goToPreviousIndex(){
    carouselIndex !== 0 ? setCarouselIndex(previousCarouselIndex => previousCarouselIndex - 1) : setCarouselIndex(maxIndex);
  }
  
  useEffect(() => {
    selectProducts();
  }, [carouselIndex])

  function selectProducts(){
    switch (carouselIndex){
      case 1: setRecommendedProducts(productList.slice(4, 8));
      break;
      case 2: setRecommendedProducts(productList.slice(8));
      break;
      default: setRecommendedProducts(productList.slice(0, 4));
    }
  }

  return (
    <div>
      <Header number={number}/>
      <Cart
      products={products}
        recommendedProducts={recommendedProducts}
        number={number}
        goToNextIndex={goToNextIndex}
        goToPreviousIndex={goToPreviousIndex}
        decrement={decrement}
        increment={increment}
      />
      <Footer />
    </div>
  );
}

export default App;
