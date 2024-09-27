import React, { useState } from 'react';
import { getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth , email ,password)
    .then( res => {
        console.log(res.user);
        navigate('/login');
    }).catch(err=>{
        console.log(err);
    })
  }
    
  return (
    <div>
        <h3>Sign Up</h3>
        <form onSubmit={submitHandler}>
        <input onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='email'/><br/>      
        <input onChange={(e)=>{setPassword(e.target.value)}} type='text' placeholder='password'/><br/>
        <button type='submit'>Submit</button>      

        </form>
    </div>
  )
}

export default Signup
