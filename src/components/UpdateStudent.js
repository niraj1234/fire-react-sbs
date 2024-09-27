import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { getDatabase ,ref , update} from 'firebase/database';
import { getStorage , ref as storageRef , uploadBytes ,getDownloadURL} from 'firebase/storage';


const UpdateStudent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [adm,setAdm] = useState(location.state[0]);
    const [name,setName] = useState(location.state[1].studentName);
    const [phone,setPhone] = useState(location.state[1].phone);
    const [selectedFile ,setSelectedFile] = useState(null);

//    console.log(location);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  setSelectedFile(file);
}

const submitHandler =async (e) => {
    e.preventDefault();
    
    if(selectedFile){
      const db = getDatabase(app);
      const studentRef = ref(db, 'student/'+location.state[0]);
      
      const storage = getStorage(app);
      const myRef = storageRef(storage , 'images/'+location.state[0]);
      await uploadBytes(myRef , selectedFile);
      const imageUrl = await getDownloadURL(myRef);
  
      update(studentRef ,{
                  studentName:name,
                  phone:phone,
                  imageUrl:imageUrl})
          .then(res => {navigate('/dashboard/studentList')})
          .catch(err=>{console.log(err)})
  
    }else{
      const db = getDatabase(app);
      const studentRef = ref(db, 'student/'+location.state[0]);
    
      update(studentRef ,{
                  studentName:name,
                  phone:phone})
          .then(res => {navigate('/dashboard/studentList')})
          .catch(err=>{console.log(err)})
    }

    // set(ref(db , 'student/'+adm), {
    //     studentName:name,
    //     phone:phone
    // }).then( res => {
    //     navigate('/studentList');
    // }).catch(err=>{
    //     console.log(err);
    // })
}

    return (
    <div>
      <h3>Add Student</h3>
      <form  onSubmit={submitHandler}>
      <input disabled onChange={(e)=>setAdm(e.target.value)} value={adm} type='number' placeholder="Admission Number" /><br/>
      <input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder="Enter Name" /><br/>
      <input onChange={(e)=>setPhone(e.target.value)} value={phone} type='number' placeholder="Enter Phone" /><br/>
      <input onChange={handleFileChange} type='file'/>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default UpdateStudent