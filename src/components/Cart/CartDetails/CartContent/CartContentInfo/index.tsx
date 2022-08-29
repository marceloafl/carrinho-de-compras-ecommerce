import ProductDescription from '../../../../ProductDescription';
import ProductImage from '../../../../ProductImage';
import ProductPrice from '../../../../ProductPrice';
import ProductQuantity from './ProductQuantity';
import style from './CartContentInfo.module.scss';
import DeleteProduct from '../../../../DeleteProduct';
import { useEffect, useState } from 'react';
import { IProduct } from '../../../../../types/product';

interface Props {
    name: string,
    image: string,
    description: string,
    price: number,
    number: number,
    incrementTotal: () => void,
    decrementTotal: () => void,
    removeProduct: (product: IProduct) => void,
    product: IProduct,
}

function CartContentInfo(
    {
        name,
        image,
        description,
        price,
        number,
        incrementTotal,
        decrementTotal,
        removeProduct,
        product,
    }: Props){

    const [quantity, setQuantity] = useState(1);

    function increment(){
        incrementTotal();
        return setQuantity(previousQuantity => previousQuantity + 1)
    };
    
    function decrement(){
        if(quantity > 1){
            decrementTotal();
            return setQuantity(previousQuantity => previousQuantity - 1)
        }
        return quantity;
    };

    return (
        <li className={style['product-list--cart']}>
            <ProductImage image={image}/>
            <ProductDescription description={description}/>
            <ProductQuantity
                number={number}
                quantity={quantity}
                increment={increment}
                decrement={decrement}
            />
            <ProductPrice
                price={price}
            />
            <DeleteProduct
                removeProduct={removeProduct}
                product={product}
            />
        </li>
    )
}

export default CartContentInfo;