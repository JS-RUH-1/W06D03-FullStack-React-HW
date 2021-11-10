import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = React.useState([])
  const [user, setUser] = React.useState('')
  const [body, setBody] = React.useState('')

  // React.useEffect(() => {
  //   fetch('/users/', {
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }).then( res => {
  //     if (res.ok){
  //       return res.json()
  //     }
  //   }).then(res => serUsers(res))
  // },[])

  React.useEffect(()=>{
    axios.get('http://localhost:5000/')
    .then((res) => {
      // console.log(res.data)
      setUsers(res.data)
    })
  }, [])  

  const updateUsers = () => {
    axios.get('http://localhost:5000/')
    .then((res) => {
      // console.log(res.data)
      setUsers(res.data)
    })
  }
  // React.useEffect(() => {
  //   console.log(users)
  // }, [users])
  
  const handleClick = () => {
    axios.post('http://localhost:5000', {title: user, body: body})
    .then((res) => {
      // console.log(res.data)
      setUsers([...users, res.data])
    })
  }

  const handleDelet = (userId) => {
    console.log(userId)

    axios.delete('http://localhost:5000', { data: { id: userId }})
    .then((res) => {
      console.log(res.data)
      updateUsers()
    })
  }

  return (
    <div style={{width:'352px', margin: '0 auto'}}  className="App">
      <h1>BLOGS LIST:</h1> <br/>
      {users.map((user) => (
        <div style={{textAlign:'left', border:'1px solid grey', padding: '20px'}}  key={user.id}>
         <h3>Title:</h3>
         <p>{user.title}</p>
         <h3>Body:</h3>
         <p> {user.body} </p>
         <button onClick={()=> handleDelet(user.id)}>DELETE</button><br/><br/>
         </div>
      ))}

     <br/>  
     <input placeholder='Title' style={{width:'350px'}} onChange={(e) => setUser(e.target.value)}></input><br/><br/>
     <textarea  placeholder='Body'  onChange={(e) => setBody(e.target.value)} rows='9' cols="42" ></textarea><br/>
     <button onClick={handleClick}>POST</button>
    </div>
  );
}

export default App;
