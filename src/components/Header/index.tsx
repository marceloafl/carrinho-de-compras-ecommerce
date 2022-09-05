import Logo from "../Logo";
import Search from "./Search/Search";
import style from './Header.module.scss';
import Menu from "./Menu";
import IconCart from "./IconCart";

interface Props{
    totalQuantity: number
}

function Header({totalQuantity}: Props){
    return (
        <div className={style['header-wrapper']}>
            <Logo />
            <Search />
            <div className={style.wrapper}>
                <IconCart totalQuantity={totalQuantity}/>
                <Menu>Entrar | Cadastrar</Menu> 
            </div>
        </div>
    )
}

export default Header;