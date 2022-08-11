import style from './ProductImage.module.scss';
import productImage from '../../../../../../assets/images/racao_dog.png';

function ProductImage(){
    return (
        <div className={style.product}>
            <img
                src={productImage}
                alt='Nome do produto'
            />
        </div>
    )
}

export default ProductImage;