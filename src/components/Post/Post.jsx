import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post;
    const postStyle ={
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '30px'
    }
    return (
        <div style={postStyle}>
            <h3>Post of id : {id} </h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}> <button>Show Details</button></Link>
        </div>
    );
};

Post.propTypes = {
    post : PropTypes.object,
};

export default Post;