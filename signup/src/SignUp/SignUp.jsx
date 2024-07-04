import React from 'react';
import Triangle from '../Triangle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



export default function SignUp() {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8000/api/user', {name, email, password, confirm})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  
  return (<>
  <Triangle/>
    <div className="container">
  <h2>Signup</h2>
  <form onSubmit ={handleSubmit}>
    <div className="form-group">
    <i className="fa-solid fa-user"></i>
      <input className='txt' type="text" 
      onChange={(e) => setName(e.target.value)}
      placeholder="Full Name" required/>
      
    </div>
    <div className="form-group">
    <i className="fa-solid fa-envelope"></i>
    <input className='txt' type="email" 
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email ID" required/>
    </div>
    <div className="form-group">
    <i className="fa-solid fa-lock"></i>
      <input className='txt' type="password" 
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Create a Password" required />
    </div>
    <div className="form-group">
    <i className="fa-solid fa-eye"></i>
      <input type="password" 
      className='txt'
      onChange={(e) => setConfirm(e.target.value)}
      placeholder="Confirm Password" required/>
      
      
    </div>
    <button type="submit">Signup</button>
    <p>Already have an Account? <Link to="/login"  className='lin'>Login</Link></p>
  </form>
</div>

</>
  )
}
