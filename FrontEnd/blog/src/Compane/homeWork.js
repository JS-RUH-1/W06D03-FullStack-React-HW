import React, { useEffect, useState } from "react";
import axios from 'axios';

function HomeWork() {

    const [add , setAdd]=useState([])
    const [Tital , SaveTital ]= useState()
    const [link , setLink]=useState()

    useEffect (()=>{
        axios.get('homeWork/gethomeWork')
        .then((res)=>{
            console.log(res.data)
            setAdd(res.data)
            
        })

    },[])

    async function addNew (e){
        e.preventDefault()

        let newhomeWork = {
            Tital : Tital,
            link : link 
        }

        await axios.post('homeWork/addHomeWork' , newhomeWork)
        .then ((res)=>{
            setAdd(add.concat(newhomeWork))
            console.log(res)

        })

        console.log(newhomeWork)
    }

    async function deleatHW (e,id){
        e.preventDefault()

         axios.delete(`homeWork/delete/${id}` )
        .then ((res)=>{
            console.log(res.data)
            setAdd(res.data)
        })
    }

    async function update (e , id){
        e.preventDefault()

        axios.put(`homeWork/update/${id}` , {title:Tital , link:link})
        .then ((res)=>{
            setAdd(res.data)
        })

    }




    return(

        <div>
        {
            add.map((ele)=>{
            return(
                <div>
                
          <h3>{ele.title}</h3> 
            <p>{ele.link}</p>
            <button onClick={(e)=> {deleatHW(e,ele.id)}}> delete</button>
            <button onClick={(e)=>{update(e,ele.id)}}> update</button>
            </div>
            )
        })}

       
        <input type='text' value={Tital}
        onChange={(e) => SaveTital(e.target.value) }/>

        <input type='text' value ={link}
        onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={addNew}> Add home work </button>









        </div>
    );




}

export default HomeWork 