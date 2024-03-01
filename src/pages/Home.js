import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Otavio Mesquita');

    function handleClick(){
        setName('Jorge Romeu')
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <h1> { name } </h1>
            <button onClick={handleClick}>Click Here</button>
        </div>
      );
}
 
export default Home;