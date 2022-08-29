import style from './ProductCard.module.scss';
import Button from "../Button";
import ProductDescription from "../ProductDescription";
import ProductImage from "../ProductImage";
import ProductPrice from "../ProductPrice";
import { IProduct } from '../../types/product';

interface Props{
    product: IProduct,
    name: string,
    image: string,
    description: string,
    price: number,
    addProduct: (product: IProduct) => void,
}

function ProductCard(
    {
        product,
        name,
        image,
        description,
        price,
        addProduct,
    }: Props){
    return (
        <li className={style['recommended-product__card']}>
            <ProductImage image={image}/>
            <ProductDescription description={description}/>
            <ProductPrice
                price={price}
            />
            <Button
                buttonType="main"
                onClick={() => addProduct(product)}
            >
                    Adiciona
            </Button>
        </li>
    )
}

export default ProductCard;