import axios from 'axios';
import { useState, useEffect } from 'react';


function Blogss(){

const [addt, setAddt] = useState ('')
const [addb, setAddb] = useState ('')
const [blog, setBlog] = useState([])
const [edit, setEdit] = useState(false)
const [save, setSave] = useState()

useEffect(()=> {
    axios.get('/blogs')
    .then((res) => {
        console.log(res.data);
        setBlog(res.data);
    })
    console.log(blog)
}, []);




function handlePost() {
    axios.post('/blogs', {title: addt, body: addb })
    .then((res) => {
        console.log(res.data);
        setBlog([...blog,res.data]);
    })
}


function Editblog(id){
    setSave(id)
    // console.log(save)
    setEdit(true)

}

function newblog(){
    console.log(addt)
    console.log(addb)
    axios.put('/blogs', {data:{id:save, title: addt, body: addb }})
    .then((res) => {
        console.log(res.data);
        setBlog(res.data);
    })
}
// console.log(save)

// useEffect(()=> {
//     console.log(blog);
    
// }, [blog]);




function handleDelet(blogId){
    axios.delete('/blogs', {data:{id:blogId} })
    .then((res) => {
        console.log(res.data);
        setBlog(res.data);

    })
}

    return(
       <div>
           {
               blog.map((item) => {
                   return (
                       <div>
                       <h6>id:{item.id} date:{item.date}</h6>
                        <h4>title:{item.title}</h4>
                        <p>blog:{item.body}</p>
                        <button onClick={() => handleDelet(item.id)}>delet</button>
                        <button onClick={() => Editblog(item.id)} >Edit</button>
                        </div>
                   )
               })
           }

        <input onChange={(e)=> setAddt(e.target.value)}  ></input>
           <input onChange={(e)=> setAddb(e.target.value)}  ></input>
           <button onClick={handlePost} >blog</button>
           {(function rebutton(){
               if (edit == true){
                   return <button onClick={newblog}>save</button>
               }
           }) ()}
        
       </div>
    )


}

export default Blogss