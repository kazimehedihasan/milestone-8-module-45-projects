/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border : '2px solid red',
        padding : '5px',
        bordeerRadius :'20px'
    }
    const handleShowDetails = () => {
navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h4>Post og id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`} className="text-yellow-400 text-lg">Post Detail</Link>
            <button className="bg-amber-400 btn" onClick={handleShowDetails }>Click to see details</button>
        </div>
    );
};

export default Post;