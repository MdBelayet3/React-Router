import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body, userId} = post;
    return (
        <div>
            <h3>User id : {userId} </h3>
            <h3> Post id : {id}</h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;