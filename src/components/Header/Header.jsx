import {  NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/albums">Albums</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/app">App</NavLink>
            </nav>
        </div>
    );
};

export default Header;