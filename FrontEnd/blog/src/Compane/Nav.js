import React from 'react';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Blog from './Blog';

 function Navbar () {
    return ( 

        <BrowserRouter>
        <Link to ="/blog" > Blog </Link>
        <Routes>
        <Route path="/blog" element={<Blog/>}>
        
        </Route>
        </Routes>
        </BrowserRouter>

     );


}
 
export default Navbar ;

