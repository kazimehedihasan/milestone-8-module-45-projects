import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const {title , body,} = post;
    const navigate = useNavigate();

    console.log(postId);
    const handleGoBack = () => {
navigate(-1);
    }
    return (
        <div>
            <h3>Post details about:</h3>
            <p>title{title}</p>
            <p><small>{body}</small></p>
            <button className="btn bg-slate-500" onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;