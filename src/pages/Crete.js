import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title , setTitle ] = useState('') 
    const [body  , setBody  ] = useState('') 
    const [author, setAuthor] = useState('Mario')
    const [isPending, setIsPending] = useState(false) 

    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsPending(true);
        setTimeout(() => {
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsPending(false);
            console.log('Blog added!')
            navigate('/');
        })
    }, 1000)
    }

    return (
        <div className="create">
            <form onSubmit={handelSubmit}>
                <h2>Add a New Blog</h2>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value = {title}
                onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Blog Body:</label>
                <textarea 
                required
                value = {body}
                onChange={(e) => setBody(e.target.value)} 
                >                    
                </textarea>
                <label>Blog Author:</label>
                <select
                value = {author}
                onChange={(e) => setAuthor(e.target.value)} 
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi </option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
      );
}
 
export default Create;