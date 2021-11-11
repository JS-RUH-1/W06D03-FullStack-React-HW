import axios from 'axios'
import {useEffect , useState} from 'react'

function Github() {
    const [ github , setGithub] = useState([])
    const [git , setGit] = useState({title:"", description:"",link:"",techUsed:""})
    const [title2 , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [link2 , setLink] = useState("")
    const [techUsed , setTechUsed] = useState("")
    

    useEffect(()=>{
        axios.get('http://localhost:3001/github/HW')
        .then((res)=>{
            setGithub(res.data)
        })
    }, [])

    function addHW(e){
        setGit({title:title2 , description:description , link:link2 , techUsed:techUsed})
       e.preventDefault()
        axios.post('http://localhost:3001/github/addHW', {title:title2 , description:description , link:link2 , techUsed:techUsed})
        .then((res)=>{
         console.log("the new thing:",res);
         setGithub(res.data)

        })
    }

    function deleteIn(e,id){
        e.preventDefault()
        axios.delete(`http://localhost:3001/github/delete/${id}`)
        .then((res)=>{
            console.log("deleted", res.data);
            setGithub(res.data)
        })
    }

    
    function edit(e, id) {
        setGit({title:title2 , description:description , link:link2 , techUsed:techUsed})
        console.log(id)
        e.preventDefault()
        axios.put(`http://localhost:3001/github/update/${id}`, {title:title2 , description:description , link:link2 , techUsed:techUsed})  
        .then((res)=>{
            console.log("updated", res.data)
            setGithub(res.data)
        })
    }



    return(
        <div>
        <from>
            <input placeholder="title" onChange={(e) => setTitle(e.target.value)}></input>
            <input placeholder="description" onChange={(e) =>  setDescription(e.target.value)}></input>
            <input placeholder="link2" onChange={(e) => setLink(e.target.value)}></input>
            <input placeholder="techUsed" onChange={(e) => setTechUsed(e.target.value)}></input>
            <button onClick={(e)=>{addHW(e)}}>ADD</button>

        </from>
        {github.map((ele)=>{
            return(
                <div>
            <h3>{ele.title}</h3>
            <p>{ele.description}</p>
            <p>{ele.link}</p>
            <p>{ele.techUsed}</p>
            <button onClick={(e)=>{deleteIn(e,ele.id)}}>delete</button>
            <button onClick={(e)=>{edit(e,ele.id)}}>Edit</button>
            </div>
            )
        })}</div>
    )

}

export default Github