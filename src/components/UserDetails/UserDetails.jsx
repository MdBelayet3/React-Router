import { useLoaderData, useNavigate } from 'react-router-dom';


const UserDetails = () => {
    const user = useLoaderData();
    const {name, website, email} = user;

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h2>Details about user {name}</h2>
            <p>Website : {website}</p>
            <p>Email : {email}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;