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
    number: number,
    goToNextIndex: () => void,
    goToPreviousIndex: () => void,
    incrementTotal: () => void,
    decrementTotal: () => void,
    addProduct: (product: IProduct) => void,
    removeProduct: (product: IProduct) => void,
}

function Cart(
    {
        products,
        recommendedProducts,
        number,
        goToNextIndex,
        goToPreviousIndex,
        incrementTotal,
        decrementTotal,
        addProduct,
        removeProduct,
    }: Props){    
    
    const [productsPriceSum, setProductsPriceSum] = useState<number[]>([]);

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
                                number={number}
                                products={products}
                                incrementTotal={incrementTotal}
                                decrementTotal={decrementTotal}
                                removeProduct={removeProduct}
                            /> 
                        </> : <EmptyCart />
                    }
                    
                    <ProductRecommendation
                        recommendedProducts={recommendedProducts}
                        goToNextIndex={goToNextIndex}
                        goToPreviousIndex={goToPreviousIndex}
                        addProduct={addProduct}
                    />
                </div>
                {itemsInCart() &&
                    <div className={style['summary-info']}>
                        <CartSummary
                            number={number}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default Cart;