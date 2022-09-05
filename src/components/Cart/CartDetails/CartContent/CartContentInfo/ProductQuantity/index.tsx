import { useEffect, useState } from 'react';
import { IProduct } from '../../../../../../types/product';
import Counter from './Counter';
import style from './ProductQuantity.module.scss';

interface Props {
    product: IProduct,
    getQuantity: (product: IProduct, quantity: number) => void,
}

function ProductQuantity({product, getQuantity}: Props){
    const [quantity, setQuantity] = useState(1);

    function increment(){
        setQuantity(previousQuantity => previousQuantity + 1);
    }

    function decrement(){
        quantity > 1 ? setQuantity(previousQuantity => previousQuantity - 1) : setQuantity(1);
    }

    useEffect(() => {
        getQuantity(product, quantity);
    }, [quantity])

    return (
        <div className={style.quantity}>
            <Counter
                product={product}
                increment={increment}
                decrement={decrement}
            />
        </div>
    )
}

export default ProductQuantity;