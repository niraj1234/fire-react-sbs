import React, { useState } from 'react';
import { getAuth , signInWithEmailAndPassword, signInWithPopup ,GoogleAuthProvider} from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth , email ,password)
    .then(userDate =>{
        console.log(userDate.user);
        navigate('/dashboard');
    }).catch(err=>{
        console.log(err);
    })
  }

  const loginWithGoogle = ()=>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then( (result) =>{
        console.log(result);
        navigate('/dashboard');
    }).catch(err => {
        console.log(err);
    })

  }

  return (
    <div>
        <h3>Login</h3>
        <form onSubmit={submitHandler}>
        <input onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='email'/><br/>      
        <input onChange={(e)=>{setPassword(e.target.value)}} type='text' placeholder='password'/><br/>
        <button type='submit'>Login</button>
        </form>

        <br/><br/>      
        <button type='button' onClick={loginWithGoogle} >Login with Google</button>
        
    </div>
  )
}


export default Login
