import React, { useState } from 'react';
import { getFirestore, doc, updateDoc} from 'firebase/firestore';
import { app } from '../firebase';
import { useLocation, useNavigate } from 'react-router-dom';


const UpdateFaculty = () => {
    const location = useLocation();
    const navigate = useNavigate();
 
    const [name, setName] = useState(location.state.facultyName);
    const [phone,setPhone] = useState(location.state.phoneNumber);

    const submitHandler = async (e)=>{
        e.preventDefault();
        const db = getFirestore(app);
        const docRef  = doc(db ,'faculty' ,location.state.id);
        try{
            await updateDoc(docRef, {
                facultyName:name,
                phoneNumber:phone
            });
        navigate('/dashboard/facultyList');
        }catch(err){
            console.log(err);
        }
        console.log(docRef,docRef.id);
    }

return (
    <div>
      <h3>Update Faculty</h3>
      <form onSubmit={submitHandler}>
        <input onChange={(e)=>setName(e.target.value)}  value={name} type='text' placeholder='Faculty Name'></input><br/>
        <input onChange={(e)=>setPhone(e.target.value)} value={phone}  type='number' placeholder='Phone Number'></input><br/>
        <button type='submit'>Update</button>
      </form>
    </div>
  )

}
export default UpdateFaculty
