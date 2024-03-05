import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    
    const { id } = useParams();
    const { data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);

    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE',
        }).then(
            navigate('/')
        )
    }
    return ( 
        <div className="blog-details"> 
            { isPending && <div>Loading...</div>}
            { error && <div>{error.message}</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;