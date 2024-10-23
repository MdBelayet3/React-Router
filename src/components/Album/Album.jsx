import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';

const Album = ({album}) => {
    const {userId, id, title} =album;

    const navigate = useNavigate();

    const handleAlbumShowDetails = () =>{
        navigate(`/album/${id}`)
    }

    return (
        <div style={{
            border: '2px solid blue',
            padding: '10px',
            borderRadius: '30px'
        }}>
            <h3>UserId : {userId} </h3>
            <h3>Id : {id}</h3>
            <p>{title}</p>
            <button style={{fontSize: '20px'}} onClick={handleAlbumShowDetails}>Show Details</button>
        </div>
    );
};

Album.propTypes = {
    album: PropTypes.object,
};

export default Album;