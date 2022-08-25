import style from './ProductImage.module.scss';

interface Props{
    image: string,
}

function ProductImage({image}: Props){
    return (
        <div className={style.product}>
            <img
                src={image}
                alt='Nome do produto'
            />
        </div>
    )
}

export default ProductImage;