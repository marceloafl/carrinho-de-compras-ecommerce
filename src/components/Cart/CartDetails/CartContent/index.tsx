import { IProduct } from '../../../../types/product';
import style from './CartContent.module.scss';
import CartContentInfo from './CartContentInfo';

interface Props {
    number: number,
    products: IProduct[],
    incrementTotal: () => void,
    decrementTotal: () => void,
    removeProduct: (product: IProduct) => void,
}

function CartContent({number, products, incrementTotal, decrementTotal, removeProduct}: Props){
    return (
        <ul className={style['cart-content-wrapper']}>
            {products.map((product) =>(
                <CartContentInfo
                    {...product}
                    key = {product.id}
                    number={number}
                    incrementTotal={incrementTotal}
                    decrementTotal={decrementTotal}
                    removeProduct={removeProduct}
                    product={product}
                />
                ))}
        </ul>
    )
}

export default CartContent;