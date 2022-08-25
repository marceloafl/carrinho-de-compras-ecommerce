import Logo from "../Logo";
import style from './Footer.module.scss';

function Footer(){
    return (
        <div className={style.footer}>
            <div className={style.contact}>
                <p>Desenvolvido por Marcelo Lemes</p>
                <p>E-mail: marceloaflemes@gmail.com</p>
                <a href="https://marceloafl.github.io/portfolio/" target="_blank">Veja meu portfólio</a>
            </div>
            <Logo />
            <div>
                <h4>Formas de pagamento</h4>
                <img src="https://www.petlove.com.br/static/uploads/images/payment/methods.png" alt="Boleto, cartões de crédito e pix" />
            </div>
        </div>
    )
}

export default Footer;