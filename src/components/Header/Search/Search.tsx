import style from './Search.module.scss';
import {FaSearch} from 'react-icons/fa';

function Search (){
    return(
        <div className={style.searchWrapper}>
            <input
                type="search"
                placeholder="O que você está buscando?"
                name="search"
            />
            <button>
                <FaSearch />
            </button>
        </div>
    )
}

export default Search;