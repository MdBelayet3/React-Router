import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/users">Users</Link>
                <Link to="/albums">Albums</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/app">App</Link>
            </nav>
        </div>
    );
};

export default Header;