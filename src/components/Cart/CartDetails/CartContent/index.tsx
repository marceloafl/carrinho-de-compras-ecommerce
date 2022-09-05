import { IProduct } from '../../../../types/product';
import style from './CartContent.module.scss';
import CartContentInfo from './CartContentInfo';

interface Props {
    products: IProduct[],
    removeProduct: (product: IProduct) => void,
    getQuantity: (product: IProduct, quantity: number) => void,
}

function CartContent({products, removeProduct, getQuantity}: Props){
    return (
        <ul className={style['cart-content-wrapper']}>
            {products.map((product) =>(
                <CartContentInfo
                    product={product}
                    key = {product.id}
                    removeProduct={removeProduct}
                    getQuantity={getQuantity}
                />
                ))}
        </ul>
    )
}

export default CartContent;