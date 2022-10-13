import { useState } from "react";
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";
import style from './ProductRecommendation.module.scss';
import { IProduct } from "../../types/product";
import CarouselControl from "../CarouselControl";

interface Props{
    recommendedProducts: IProduct[],
    goToNextIndex: () => void,
    goToPreviousIndex: () => void,
    addProduct: (product: IProduct) => void,
}

function ProductRecommendation({recommendedProducts, goToNextIndex, goToPreviousIndex, addProduct}: Props){
    return (
        <div className={style['recommendation-section']}>
            <div className={style['recommendation-list__title']}>
                <SectionTitle>
                    Recomendações para você
                </SectionTitle>
                <CarouselControl
                    goToNextIndex={goToNextIndex}
                    goToPreviousIndex={goToPreviousIndex}
                />
            </div>
            <ul className={style['recommendation-list']}>
                {recommendedProducts.map((product) => (
                    <ProductCard
                        {...product}
                        key = {product.id}
                        product={product}
                        addProduct={addProduct}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ProductRecommendation;