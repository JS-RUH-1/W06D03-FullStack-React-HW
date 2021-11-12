import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { post } from "../../../../BackEnd/blogRoute";

function Blog (){

const [save , setSave]=useState([])
const [tital , savetital]=useState()
const [body , saveBody]=useState()

    useEffect (()=>{
        axios.get("/blog/showBlog").then((res)=>{
            setSave(res.data)
            console.log(res.data)
        })
    },[])

    async function addfunc(){
        let newData ={
            title:tital,
            body:body,
            date:new Date().toLocaleString()
        }

        await axios.post("/blog/addBlog", newData)
        .then((res)=>{
            setSave(save.concat(newData))
           
        })


    }

    

    return(
        <div>
        {
            save.map((ele)=>{
                return(
                    <div>
                    {ele.id}
                    {ele.title}
                    {ele.body}
                    {ele.date}
                    </div>
                )

            })
        }


        <input type="text" value={tital}
        onChange={(ele) => savetital(ele.target.value)} 
        />    

        <input type="text" value={body}
        onChange={(ele) => saveBody(ele.target.value)} 
        />    

        <button onClick={addfunc}> ADD</button>
       
        </div>
    );



}

export default Blog

