const Home = () => {

    function handleClick(){
        console.log('click click mf')
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <button onClick={handleClick}>Click Here</button>
        </div>
      );
}
 
export default Home;