import './App.css';
import {Posts} from './Posts.js'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light fw-bold" style={{backgroundColor: "#ffb366"}}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Blogging center</Link>
      </div>
    </nav>
    <Routes>
      <Route exact path="/" element={<Posts />}/>
    </Routes>
  </Router>
  );
}

export default App;
