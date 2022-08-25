import { IProduct } from '../../../../types/product';
import style from './CartContent.module.scss';
import CartContentInfo from './CartContentInfo';

interface Props {
    number: number,
    products: IProduct[],
    decrement: () => void,
    increment: () => void,
}

function CartContent({number, products, decrement, increment}: Props){
    return (
        <ul className={style['cart-content-wrapper']}>
            {products.map((product) =>(
                <CartContentInfo
                    {...product}
                    key = {product.id}
                    number={number}
                    decrement={decrement}
                    increment={increment}
                />
            ))}
        </ul>
    )
}

export default CartContent;