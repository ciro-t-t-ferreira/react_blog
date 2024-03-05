import BlogDetails from './components/BlogDetais';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Create from './pages/Create';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

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
          <Route path="/404"
              element={<NotFound />}>                
          </Route>

          {/* Catch all route*/}
          <Route path="*"
              element={<Navigate to="/404"/>}></Route>
        </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;
