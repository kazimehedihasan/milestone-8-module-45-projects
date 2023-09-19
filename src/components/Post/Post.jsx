/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border : '2px solid red',
        padding : '5px',
        bordeerRadius :'20px'
    
    }
    return (
        <div style={postStyle}>
            <h4>Post og id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`} className="text-yellow-400 text-lg">Post Detail</Link>
        </div>
    );
};

export default Post;