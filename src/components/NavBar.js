import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar"> 
        <h1> React Blog</h1>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        </nav>
      );
}
 
export default NavBar;