import React, { useState } from 'react'
import { app } from '../firebase';
import { getDatabase ,ref , set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { getStorage , ref as storageRef , uploadBytes ,getDownloadURL} from 'firebase/storage';


const AddStudent = () => {

    const [adm,setAdm] = useState(null);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState(null);
    const [selectedFile ,setSelectedFile] = useState(null);

    const navigate = useNavigate();

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    }

const submitHandler = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const storage = getStorage(app);
    const myRef = storageRef(storage , `images/${adm}`);
    await uploadBytes(myRef , selectedFile);
    const imageUrl = await getDownloadURL(myRef);

    set(ref(db , 'student/'+adm), {
        studentName:name,
        phone:phone,
        imageUrl:imageUrl
    }).then( res => {
        setAdm(null);
        setName('');
        setPhone(null);
        navigate('/dashboard/studentList');
    }).catch(err=>{
        console.log(err);
    })
}

    return (
    <div>
      <h3>Add Student</h3>
      <form  onSubmit={submitHandler}>
      <input onChange={(e)=>setAdm(e.target.value)} type='number' placeholder="Admission Number" /><br/>
      <input onChange={(e)=>setName(e.target.value)} type='text' placeholder="Enter Name" /><br/>
      <input  onChange={(e)=>setPhone(e.target.value)}type='number' placeholder="Enter Phone" /><br/>
      <input onChange={handleFileChange} type='file'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddStudent