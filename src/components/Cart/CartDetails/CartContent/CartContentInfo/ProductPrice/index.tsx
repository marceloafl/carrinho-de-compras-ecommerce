import style from './ProductPrice.module.scss';
import {FaTrashAlt} from 'react-icons/fa';
import { maskNumber } from '../../../../../../common/utils/maskNumber';

interface Props{
    price: number,
}

function ProductPrice({price}: Props){
    return (
        <div className={style.price}>
            <p>{maskNumber(price)}</p>
            <div className={style.delete}>
                <FaTrashAlt />
            </div>
        </div>
    )
}

export default ProductPrice;