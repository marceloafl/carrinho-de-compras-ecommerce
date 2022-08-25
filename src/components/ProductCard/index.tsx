import style from './ProductCard.module.scss';
import Button from "../Button";
import ProductDescription from "../ProductDescription";
import ProductImage from "../ProductImage";
import ProductPrice from "../ProductPrice";

interface Props{
    name: string,
    image: string,
    description: string,
    price: number,
}

function ProductCard(
    {
        name,
        image,
        description,
        price,
    }: Props){
    return (
        <li className={style['recommended-product__card']}>
            <ProductImage image={image}/>
            <ProductDescription description={description}/>
            <ProductPrice price={price}/>
            <Button buttonType="main">Adicionar</Button>
        </li>
    )
}

export default ProductCard;