import style from './App.module.scss';
import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import { productList } from '../assets/products/products';
import Footer from '../components/Footer';
import { IProduct } from '../types/product';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>(productList);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  function getMaxIndex(){
    if (window.screen.width <= 768){
      return productList.length - 1;
    }
    return productList.length / 4 - 1;
  }
  
  function goToNextIndex(){
    carouselIndex !== getMaxIndex() ? setCarouselIndex(previousCarouselIndex => previousCarouselIndex + 1) : setCarouselIndex(0);
  }

  function goToPreviousIndex(){
    carouselIndex !== 0 ? setCarouselIndex(previousCarouselIndex => previousCarouselIndex - 1) : setCarouselIndex(getMaxIndex());
  }

  function addProduct(product: IProduct){
    if (!products.includes(product)){
      setProducts(previousProducts => 
        [...previousProducts, product]
      )
    }    
  }
  
  function removeProduct(product: IProduct){
    products.splice(products.indexOf(product), 1);
    setProducts(previousProducts => 
      [...previousProducts]);
  }

  function getQuantity(product: IProduct, quantity: number){
    product.quantity = quantity;
    setProducts([...products]);
  }

  function getTotalPrice(){
    products.forEach(product => product.totalPrice = Math.round((product.price * product.quantity) * 100) / 100);
    const prices = products.map(product => product.totalPrice);
    if (prices.length > 0){
      const totalPrice = prices.reduce((acc, cur) => acc + cur);
      return setTotalPrice(Math.round(totalPrice * 100) / 100);
    }
    setTotalPrice(0);

  }

  function getNumber(){
    const quantities = products.map(product => product.quantity);
    if (quantities.length > 0){
      return setTotalQuantity(quantities.reduce((acc, cur) => acc + cur));
    }
    setTotalQuantity(0);
  }

  useEffect(() => {
    selectProducts();
  }, [carouselIndex]);

  useEffect(() => {
    getTotalPrice();
    getNumber();
  }, [products]);

  function selectProducts(){
    if (window.screen.width <= 768){
      switch (carouselIndex){
        case 1: setRecommendedProducts(productList.slice(1, 2));
        break;
        case 2: setRecommendedProducts(productList.slice(2, 3));
        break;
        case 3: setRecommendedProducts(productList.slice(3, 4));
        break;
        case 4: setRecommendedProducts(productList.slice(4, 5));
        break;
        case 5: setRecommendedProducts(productList.slice(5, 6));
        break;
        case 6: setRecommendedProducts(productList.slice(6, 7));
        break;
        case 7: setRecommendedProducts(productList.slice(7, 8));
        break;
        case 8: setRecommendedProducts(productList.slice(8, 9));
        break;
        case 9: setRecommendedProducts(productList.slice(9, 10));
        break;
        case 10: setRecommendedProducts(productList.slice(10, 11));
        break;
        case 11: setRecommendedProducts(productList.slice(11));
        break;
        default: setRecommendedProducts(productList.slice(0, 1));
      }
    } else {
      switch (carouselIndex){
        case 1: setRecommendedProducts(productList.slice(4, 8));
        break;
        case 2: setRecommendedProducts(productList.slice(8));
        break;
        default: setRecommendedProducts(productList.slice(0, 4));
      }
    }
  }

  return (
    <div className={style.appStyle}>
      <Header totalQuantity={totalQuantity}/>
      <Cart
        products={products}
        recommendedProducts={recommendedProducts}
        goToNextIndex={goToNextIndex}
        goToPreviousIndex={goToPreviousIndex}
        addProduct={addProduct}
        removeProduct={removeProduct}
        getQuantity={getQuantity}
        totalPrice={totalPrice}
        totalQuantity={totalQuantity}
      />
      <Footer />
    </div>
  );
}

export default App;
