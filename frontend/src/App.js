import { useEffect, useState } from 'react';
import Post from './component/Post';
import './App.css';
import AddPost from './component/AddPost';


const axios = require('axios');

function App() {
    const [ postsList, setPostsList ] = useState ([]);
    useEffect(() => {
        axios.get(`/blog`)
        .then(function (response) {
            setPostsList (response.data);
        })
      }, []);
	return (
		<div className="container-fluid">
            <div className="d-flex justify-content-between m-5">
                <h1>Posts list</h1>
                <AddPost />
            </div>

            <div className="col-4 mx-auto accordion" id="accordionExample">
                {
                    postsList.map ((post) => {
                        return (<Post key={post.id} id={post.id} title={post.title} content={post.content} />);
                    })
                }
            </div>
		</div>
        
	);
}

export default App;
