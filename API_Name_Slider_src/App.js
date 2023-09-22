import React, { useEffect, useState } from 'react'
import "./index.css"
import Card from './Card';
import { FaGreaterThan,FaLessThan } from 'react-icons/fa';

const App = () => {
  var [index,setIndex]=useState(0);
  const [user, setUser]=useState([{id:"",name:"",email:"",username:""}]);
  
 
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(res => setUser(res))
},[])
   
const {id,name,email,username }= user[index];

const lessThan =()=>{
  if(index<=0){
    index =user.length;
    setIndex(--index);
  }
  else{
    setIndex(--index);
  }
}

const greaterThan=()=>{
  if(index >=user.length-1){
    index=-1;
    setIndex(++index);
    }
    else{
      setIndex(++index)
    }
}
  return (
    <main className='App'>
     <h1>API Name Slider</h1>
       {/* {name.map(e => e.name)} */}
    <Card >
      <section>Name :{name}</section>
      <section>id :{id}</section>
      <section>Email : {email}</section>
      <section>Username :{username}</section>
    </Card>

    
    <button onClick={lessThan}><FaLessThan /></button>
    <button onClick={greaterThan}><FaGreaterThan /></button>
  
    </main>

  )
}

export default App