import { useLoaderData } from "react-router-dom";
import User from "../User/User";
// import User from "../User/User";
const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div >
            <h3>our Users {users.length}</h3>
            <p><span className="text-rose-700">fedback</span>: Lorem, ipsum dolor sit
             amet consectetur adipisicing elit. Aliquam, accusamus. </p>
             <div className="grid grid-cols-3 gap-4">
                {
                   users.map(user => <User key={user.id} user={user}></User>)
                }
             </div>
        </div>
    );
};

export default Users;