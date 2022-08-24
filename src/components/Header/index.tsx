import Logo from "./Logo";
import Search from "./Search/Search";
import style from './Header.module.scss';
import Menu from "./Menu";
import IconCart from "./IconCart";

interface Props{
    number: number,
}

function Header({number}: Props){
    return (
        <div className={style['header-wrapper']}>
            <Logo />
            <Search />
            <div className={style.wrapper}>
                <IconCart number={number}/>
                <Menu>Entrar | Cadastrar</Menu> 
            </div>
        </div>
    )
}

export default Header;