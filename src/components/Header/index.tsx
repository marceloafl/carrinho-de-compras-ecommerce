import Logo from "./Logo";
import Search from "./Search/Search";
import style from './Header.module.scss';
import Menu from "./Menu";
import IconCart from "./IconCart";

function Header(){
    return (
        <div className={style['header-wrapper']}>
            <Logo />
            <Search />
            <div className={style.wrapper}>
                <IconCart />
                <Menu>Entrar | Cadastrar</Menu> 
            </div>
        </div>
    )
}

export default Header;