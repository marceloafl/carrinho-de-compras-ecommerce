import Counter from './Counter';
import style from './ProductQuantity.module.scss';

function ProductQuantity(){
    return (
        <div className={style.quantity}>
            <Counter />
        </div>
    )
}

export default ProductQuantity;