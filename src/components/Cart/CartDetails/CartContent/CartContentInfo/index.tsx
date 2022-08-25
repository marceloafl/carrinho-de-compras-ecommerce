import ProductDescription from '../../../../ProductDescription';
import ProductImage from '../../../../ProductImage';
import ProductPrice from '../../../../ProductPrice';
import ProductQuantity from './ProductQuantity';
import style from './CartContentInfo.module.scss';
import DeleteProduct from '../../../../DeleteProduct';

interface Props {
    name: string,
    image: string,
    description: string,
    price: number,
    number: number,
    decrement: () => void,
    increment: () => void,
}

function CartContentInfo(
    {
        name,
        image,
        description,
        price,
        number,
        decrement,
        increment,
    }: Props){
    return (
        <li className={style['product-list--cart']}>
            <ProductImage image={image}/>
            <ProductDescription description={description}/>
            <ProductQuantity
                number={number}
                decrement={decrement}
                increment={increment}
            />
            <ProductPrice price={price}/>
            <DeleteProduct />
        </li>
    )
}

export default CartContentInfo;