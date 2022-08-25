import style from './ProductDescription.module.scss';

interface Props{
    description: string,
}

function ProductDescription({description}: Props){
    return (
        <div className={style.description}>
            <p>{description}</p>
        </div>
    )
}

export default ProductDescription;