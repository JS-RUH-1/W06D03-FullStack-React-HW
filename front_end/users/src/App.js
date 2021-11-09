import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = React.useState([])
  const [user, setUser] = React.useState('')

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
    axios.post('http://localhost:5000', {name: user})
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
    <div className="App">
      USERS LISTS: <br/>
      {users.map((user) => (
         <li key={user.id}>{user.name} <button onClick={()=> handleDelet(user.id)}>DELETE</button></li>
      ))}

     <input onChange={(e) => setUser(e.target.value)}></input>
     <button onClick={handleClick}>POST</button>
    </div>
  );
}

export default App;
