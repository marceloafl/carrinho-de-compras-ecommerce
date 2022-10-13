import style from './App.module.scss';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import { productList } from '../assets/products/products';
import Footer from '../components/Footer';
import { IProduct } from '../types/product';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>(productList);

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

  

  useLayoutEffect(() => {
    async function selectProducts(){
      if (window.screen.width <= 768){
        let visibleProducts = productList.slice(carouselIndex, carouselIndex + 1)
        setRecommendedProducts(visibleProducts);
      } else {
        let visibleProducts = productList.slice(carouselIndex * 4, carouselIndex * 4 + 4)
        setRecommendedProducts(visibleProducts);
      }
    }
    selectProducts();
  }, [carouselIndex]);

  useEffect(() => {
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
    getTotalPrice();
    getNumber();
  }, [products]);

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