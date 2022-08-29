import style from './DeleteProduct.module.scss';
import {FaTrashAlt} from 'react-icons/fa';
import { IProduct } from '../../types/product';

interface Props{
    product: IProduct
    removeProduct: (product: IProduct) => void,
}

function DeleteProduct({product, removeProduct}: Props){
    return (
        <button
            className={style.delete}
            onClick={() => removeProduct(product)}
        >
            <FaTrashAlt />
        </button>
    )
}

export default DeleteProduct;