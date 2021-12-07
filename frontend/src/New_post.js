function New_post(props){
    const date = new Date();

    return(
        <div>
            <button type="button" className="btn btn-sm btn-success shadow" data-bs-toggle="modal" data-bs-target="#exampleModal">Add post</button>
            
            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form method="post" action="http://localhost:4000/addPost" target="_self">
                                <input type="text" className="form-control mb-2" name="date" 
                                value={`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`} readOnly/>
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" className="form-control mb-2 mt-1"/>
                                <label htmlFor="img">Cover image</label>
                                <input type="text" id="img" name="img" className="form-control mb-2 mt-1" placeholder="Paste image URL"/>
                                <label htmlFor="content">Content</label>
                                <textarea rows="10" id="content" name="content" className="form-control mb-2 mt-1"/>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={()=>{props.setState(props.state+1)}}>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
    

}

export {New_post};