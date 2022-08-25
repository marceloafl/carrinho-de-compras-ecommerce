import style from './DeleteProduct.module.scss';
import {FaTrashAlt} from 'react-icons/fa';

function DeleteProduct(){
    return (
        <div className={style.delete}>
            <FaTrashAlt />
        </div>
    )
}

export default DeleteProduct;