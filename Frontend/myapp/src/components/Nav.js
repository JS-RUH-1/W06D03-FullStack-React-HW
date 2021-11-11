import * as Bootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Home from './Home'
import Post from './Post'
import HW from './HW'

function NavBar() {
    return (
      <div>

          <Router>

         <Bootstrap.Navbar bg="dark" variant="dark">
            <Bootstrap.Container>
            <Bootstrap.Navbar.Brand ><Link to="/Home">Home</Link></Bootstrap.Navbar.Brand>
            <Bootstrap.Nav className="me-auto">
            <Bootstrap.Nav.Link> <Link to="/Post">Post</Link></Bootstrap.Nav.Link>
            <Bootstrap.Nav.Link> <Link to="/HW">HomeWork</Link></Bootstrap.Nav.Link>
            </Bootstrap.Nav>
            </Bootstrap.Container>
         </Bootstrap.Navbar>

         <Routes>
          <Route exact path="/Home" element = { <Home />}></Route>
          <Route exact path="/Post" element = { <Post />}></Route>
          <Route exact path="/HW" element = { <HW />}></Route>
        </Routes>

         </Router>

      </div>
    );
}

export default NavBar;