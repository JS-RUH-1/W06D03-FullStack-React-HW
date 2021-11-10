import { useRef } from "react";
const axios = require('axios');

function AddPost (props){
    const titleInput = useRef(null);
    const contentInput = useRef(null);
    function createNewPost (){
        let title = titleInput.current.value;
        let content = contentInput.current.value;
        axios.post(`/blog`,{
            "title": title,
            "content": content
        })
        .then(function (response) {
            window.location.href="/"
        })
    }
    return (
        <div>
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="bi bi-plus fw-bold"></i>New Post
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Post</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="titleInput" className="form-label">Title</label>
                            <input ref={titleInput} type="text" className="form-control" id="titleInput" placeholder="post title"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contentTextArea" className="form-label">Content</label>
                            <textarea ref={contentInput} className="form-control" id="contentTextArea" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => createNewPost()}>Create Post</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost;