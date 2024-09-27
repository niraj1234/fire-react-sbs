import React, { useState } from 'react';
import {collection,addDoc,getFirestore} from 'firebase/firestore';
import {app} from '../firebase';
const AddFaculty = () => {
    const [name, setName] = useState('');
    const [phone,setPhone] = useState(null);


    const submitHandler = async (e)=>{
        e.preventDefault();
        console.log(name,phone);
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, 'faculty') , {
            facultyName:name,
            phoneNumber:phone
        });
        console.log(docRef,docRef.id);
    }

    return (
    <div>
      <h3>Add Faculty</h3>
      <form onSubmit={submitHandler}>
        <input onChange={(e)=>setName(e.target.value)} type='text' placeholder='Faculty Name'></input><br/>
        <input onChange={(e)=>setPhone(e.target.value)} type='number' placeholder='Phone Number'></input><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddFaculty
