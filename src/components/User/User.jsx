import PropTypes from 'prop-types';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { name, id, phone, email } = user;
    const styles = {
        border : "2px solid yellow",
        backgroundColor: "blue",
        color:  'white',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={styles}>
            <h3>Name : {name}</h3>
            <h4>Phone : {phone}</h4>
            <p>Email : {email}</p>
            <Link to={`/user/${id}`}> <button>Show Details</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.array,
};

export default User;