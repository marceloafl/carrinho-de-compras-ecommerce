import {FaShoppingBasket} from 'react-icons/fa';
import Button from '../Button';
import style from './EmptyCart.module.scss';

function EmptyCart(){
    return(
        <div className={style['cart-wrapper--empty']}>
                    <h3>Seu carrinho está vazio</h3>
                    <p>Adicione os produtos que deseja comprar.</p>
                    <FaShoppingBasket />
                    <Button buttonType="main">Ir para a página inicial</Button>
                </div>
    )
}

export default EmptyCart;