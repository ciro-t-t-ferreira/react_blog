const BlogList = ( { blogs, title, handleDelete }) => {

    return ( 
        <div className="BlogList">
            <h1>{title}</h1>            
            {
                blogs.map(blog =>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}> delete </button>
                    </div>
                ))
            }
        </div>
     );
}
 
export default BlogList;