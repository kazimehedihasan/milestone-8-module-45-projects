import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, username} = user;
    return (
        <div>
            <h2>Details about user :{name}</h2>
            <p>Website : {username}</p>

            <p>Thank you for visiting our website</p>
        </div>
    );
};

export default UserDetails;