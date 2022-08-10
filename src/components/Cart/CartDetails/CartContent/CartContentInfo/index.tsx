import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import style from './CartContentInfo.module.scss';

function CartContentInfo(){
    return (
        <div className={style['info__wrapper']}>
            <ProductImage />
            <ProductDescription />
            <ProductQuantity />
            <ProductPrice />
        </div>
    )
}

export default CartContentInfo;