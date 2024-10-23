import { useLoaderData, useNavigate } from "react-router-dom";

const AlbumDetails = () => {
    const album = useLoaderData();
    const {userId,id,title} = album;

    const navigate = useNavigate();

    const handleAlbumGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>UserId : {userId}</h3>
            <h3>Id : {id}</h3>
            <p>{title}</p>
            <button onClick={handleAlbumGoBack}>Go Back</button>
        </div>
    );
};

export default AlbumDetails;