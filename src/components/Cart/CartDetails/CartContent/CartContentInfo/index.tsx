import ProductDescription from '../../../../ProductDescription';
import ProductImage from '../../../../ProductImage';
import ProductPrice from '../../../../ProductPrice';
import ProductQuantity from './ProductQuantity';
import style from './CartContentInfo.module.scss';
import DeleteProduct from '../../../../DeleteProduct';
import { useEffect, useState } from 'react';
import { IProduct } from '../../../../../types/product';

interface Props {
    product: IProduct,
    removeProduct: (product: IProduct) => void,
    getQuantity: (product: IProduct, quantity: number) => void,
}

function CartContentInfo({product, removeProduct, getQuantity}: Props){
    return (
        <li className={style['product-list--cart']}>
            <ProductImage image={product.image}/>
            <ProductDescription description={product.description}/>
            <ProductQuantity
                product={product}
                getQuantity={getQuantity}
            />
            <ProductPrice
                price={product.price}
            />
            <DeleteProduct
                removeProduct={removeProduct}
                product={product}
            />
        </li>
    )
}

export default CartContentInfo;