import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import { productList } from '../assets/products/products';
import Footer from '../components/Footer';
import { IProduct } from '../types/product';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState();
  const [recommendedProducts, setRecommendedProducts] = useState(productList);
  const [number, setNumber] = useState(productList.length);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = productList.length / 4 - 1;

  function incrementTotal(){
    return setNumber(previsouNumber => previsouNumber + 1)
  };

  function decrementTotal(){
    if(number > 1){
        return setNumber(previsouNumber => previsouNumber - 1)
    }
    return number;
  };
  
  function goToNextIndex(){
    carouselIndex !== maxIndex ? setCarouselIndex(previousCarouselIndex => previousCarouselIndex + 1) : setCarouselIndex(0);
  }

  function goToPreviousIndex(){
    carouselIndex !== 0 ? setCarouselIndex(previousCarouselIndex => previousCarouselIndex - 1) : setCarouselIndex(maxIndex);
  }
  
  function addProduct(product: IProduct){
    setProducts(previousProducts => 
      [...previousProducts, product]
    )
  }

  function removeProduct(product: IProduct){
    products.splice(products.indexOf(product), 1);
    setProducts(previousProducts => 
      [...previousProducts]);
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
        incrementTotal={incrementTotal}
        decrementTotal={decrementTotal}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
      <Footer />
    </div>
  );
}

export default App;
