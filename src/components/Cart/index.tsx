import style from './Cart.module.scss';
import CartDetails from './CartDetails';
import CartSummary from './CartSummary';
import {IProduct} from '../../types/product';
import { useState } from 'react';
import ProductRecommendation from '../ProductRecommendation';
import EmptyCart from '../EmptyCart';
import BannerTop from '../BannerTop';

interface Props{
    products: IProduct[],
    recommendedProducts: IProduct[],
    goToNextIndex: () => void,
    goToPreviousIndex: () => void,
    addProduct: (product: IProduct) => void,
    removeProduct: (product: IProduct) => void,
    getQuantity: (product: IProduct, quantity: number) => void,
    totalPrice: number,
    totalQuantity: number,
}

function Cart(
    {
        products,
        recommendedProducts,
        addProduct,
        removeProduct,
        goToNextIndex,
        goToPreviousIndex,
        getQuantity,
        totalPrice,
        totalQuantity
    }: Props){

    function itemsInCart(){
        return products.length > 0 ? true : false;
    }

    return (
        <>
            {itemsInCart() && <BannerTop />}
            <div className={`${itemsInCart() ? style.main : style['main--empty-cart']}`}>
                <div className={style['main-info']}>
                    {itemsInCart() ?
                        <>
                            <CartDetails
                                products={products}
                                removeProduct={removeProduct}
                                getQuantity={getQuantity}
                            /> 
                        </> : <EmptyCart />
                    }
                </div>
                {itemsInCart() &&
                    <div className={style['summary-info']}>
                        <CartSummary
                            totalPrice={totalPrice}
                            totalQuantity={totalQuantity}
                        />
                    </div>
                }
            <ProductRecommendation
                recommendedProducts={recommendedProducts}
                goToNextIndex={goToNextIndex}
                goToPreviousIndex={goToPreviousIndex}
                addProduct={addProduct}
            />
            </div>
        </>
    )
}

export default Cart;