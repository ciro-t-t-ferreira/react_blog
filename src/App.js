import BlogDetails from './components/BlogDetais';
import NavBar from './components/NavBar';
import Create from './pages/Crete';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
        <Routes>
          <Route path="/"
              element={<Home />}>
          </Route>
          <Route path="/create"
              element={<Create />}>
          </Route>
          <Route path="/blogs/:id"
              element={<BlogDetails />}>
          </Route>
        </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;
