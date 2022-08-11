import style from './ProductPrice.module.scss';
import {FaTrashAlt} from 'react-icons/fa';

function ProductPrice(){
    return (
        <div className={style.price}>
            <p>R$ 179,90</p>
            <div className={style.delete}>
                <FaTrashAlt />
            </div>
        </div>
    )
}

export default ProductPrice;