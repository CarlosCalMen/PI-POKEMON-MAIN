import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Filters from '../Filters/Filters.jsx';
import style from './NavBar.module.css';

const NavBar = ({onSearch})=> {
    const {pathname} = useLocation();
    return (
        <div className ={style.bar}>
            <Link to='/home'>Home</Link>
            <Link to='/form'>Form</Link>
            {pathname ==='/home' && <Filters/>}
            {pathname ==='/home' && <SearchBar/>}
        </div>
    );
};

export default NavBar;