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
                <ul className={style['payments']}>
                    <li><img src="https://static.petz.com.br/images/exp-facelift/mastercard-logo.png" alt="Mastercard" /></li>
                    <li><img src="https://static.petz.com.br/images/exp-facelift/visa-logo.png" alt="Visa" /></li>
                    <li><img src="https://static.petz.com.br/images/exp-facelift/americanexpress-logo.png" alt="American Express" /></li>
                    <li><img src="https://static.petz.com.br/images/exp-facelift/dinersclub-logo.png" alt="Diners Club" /></li>
                    <li><img src="https://static.petz.com.br/images/exp-facelift/hypercard-logo.png" alt="Hipercard" /></li>
                    <li><img src="https://static.petz.com.br/images/exp-facelift/elo-logo.png" alt="Elo" /></li>
                    <li><img src="https://static.petz.com.br/images/exp-facelift/barcode-icon.png" alt="Boleto" /></li>
                    <li><img src="https://static.petz.com.br/images/exp-facelift/pix-transparent.svg" alt="Pix" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;