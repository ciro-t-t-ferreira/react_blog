import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";

const Home = () => {

    const [blogs, setBlogs]         = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError]         = useState(null)

    useEffect(() => { //the function fires everytime that this component is rendred
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch data for that Resource')
            }
            return res.json()
        })
        .then(data =>{
            setBlogs(data)
            setIsPending(false)
            setError(false)
        })
        .catch(err => { //catch error in case the fetch fails
            setError(err.message)
            setIsPending(false)
        })
    }, [])

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={ blogs } title="All Blogs"/>}
        </div>
      );
}
 
export default Home;