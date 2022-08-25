import style from './Cart.module.scss';
import CartDetails from './CartDetails';
import CartSummary from './CartSummary';
import {IProduct} from '../../types/product';
import { useState } from 'react';
import ProductRecommendation from '../ProductRecommendation';
import EmptyCart from '../EmptyCart';
import BannerTop from '../BannerTop';

interface Props{
    products: IProduct[] | undefined,
    recommendedProducts: IProduct[],
    number: number,
    goToNextIndex: () => void,
    goToPreviousIndex: () => void,
    decrement: () => void,
    increment: () => void,
}

function Cart({products, recommendedProducts, number, goToNextIndex, goToPreviousIndex, decrement, increment}: Props){
    const [price, setPrice] = useState(179.9);
    return (
        <>
            {products && <BannerTop />}
            <div className={`${products ? style.main : style['main--empty-cart']}`}>
                <div className={style['main-info']}>
                    {products ?
                        <>
                            <CartDetails
                                number={number}
                                decrement={decrement}
                                increment={increment}
                                products={products}
                            /> 
                        </> : <EmptyCart />
                    }
                    
                    <ProductRecommendation
                        recommendedProducts={recommendedProducts}
                        goToNextIndex={goToNextIndex}
                        goToPreviousIndex={goToPreviousIndex}
                    />
                </div>
                {products &&
                    <div className={style['summary-info']}>
                        <CartSummary
                            number={number}
                            price={price}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default Cart;