import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Our Users : {users.length}</h1>
            <p>Fantastic and bodro users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;