import { useState, useEffect } from "react";
import axios from "axios";


function HW() {
  const [hw, setHw] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/hw/allHw").then((res) => {
      console.log(res);
      setHw(res.data);
    });
  },[]);

  ///// Add HW

  function addHw(e) {
    e.preventDefault();
    console.log(e.target.form[0].value)
    axios.post("http://localhost:3001/hw/addHw",{ 
            title:e.target.form[0].value ,
            link:e.target.form[1].value,
            technologiesUsed:e.target.form[2].value })
            .then((res) => 
            {console.log("what post do u have: ", res) 
            setHw(res.data); });
  }

   ///// Delete HW

  function deleteHw(e,id) {
    e.preventDefault()
    axios.delete(`http://localhost:3001/hw/deleteHw/${id}`).then((res) => {
      setHw(res.data);

    });
  }

  ///// Edit HW

  function editHw(e,id){
    console.log(id);
    e.preventDefault()
    axios.put(`http://localhost:3001/hw/editHw/${id}`,
        {title:e.target.form[0].value ,
        link:e.target.form[1].value,
        technologiesUsed:e.target.form[2].value})
        .then((res) => {
          console.log("Updated",res.data);
        setHw(res.data);

    });

  }



  return (
    <>
      {console.log(hw)}
      <br/><h3>Add HomeWork:</h3><br/>
        <form>
            <input type="text" name="title" placeholder= "Title.."></input><br/>
            <input type="text" name="link" placeholder= "link.."></input><br/>
            <input type="text" name="technologiesUsed" placeholder= "tools.."></input><br/>
            <br/><button onClick={(e) => {addHw(e)}}>ADD</button> <tr></tr><hr/>
            {hw.map((HW) => (
              <div>
            <li style={{ listStyleType: "none" }} >
            <h2 className = "post">{HW.title}</h2><br/>
            <h5 className = "post">{HW.link}</h5><br/>
            <p className = "post">{HW.technologiesUsed}</p><br/>
            <button onClick={(e) => {deleteHw(e,HW.id)}}>Delete</button></li>
            <li style={{ listStyleType: "none" }} >
            <button onClick={(e) => {editHw(e,HW.id)}}>Edit</button></li><hr/>
            </div>
            ))}
           
        </form>
    </>
  );
}
export default HW;