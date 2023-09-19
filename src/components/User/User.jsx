/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({ user }) => {
  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };
  // console.log(user);
  const {id, name, phone, username, website } = user;
  return (
    <div style={userStyle}>
      <h1>name: {name}</h1>
      <p>phone : {phone}</p>
      <p>username: {username}</p>
      <p>user website: {website}</p>
<Link className=" text-4xl text-red-300" to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
