import {useState ,useEffect} from 'react';
import axios from 'axios'
import {New_post} from './New_post'

function Posts(){
  const[state, setState] = useState(0)
  const[data, setData] = useState([""]);
  useEffect(() => {
      axios.get('http://localhost:4000/getPosts')
      .then(data => {setData(data.data)})
      .catch((err) => console.log(err));
  },[state])
  
  return (
      <div className="container my-5">
        <div className="row row-cols-2 row-cols-md-2 mb-2 g-0" style={{width: "160px"}}>
          <div className="col">
          <New_post state={state} setState={setState}/>
          </div>
          <div className="col">
          <button className="btn btn-sm btn-secondary ms-1" onClick={()=>{setState(state+1)}}>Refresh</button>
          </div>
        </div>
        <hr/>
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                data.map((i, index) => {
                    return (
                        <div key={index} className="col">
                            <div className="card h-100 shadow">
                                <img src={i.img} alt={i.title} className="card-img-top mx-auto" style={{height: "200px"}} />
                                <div className="card-body">
                                    <h5 className="card-title text-truncate fs-6">{i.title}</h5>
                                    <p className="card-text">{i.text}</p>
                                </div>
                                <div className="card-footer bg-light">
                                  <span>{i.date}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
  )
    
}

export {Posts};