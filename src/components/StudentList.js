import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase'
import { getDatabase, onValue, ref, remove} from 'firebase/database'; 
import {getStorage,ref as storageRef , deleteObject} from 'firebase/storage';

const StudentList = () => {
  const [studentData , setStudentData] = useState(null);
  const navigate = useNavigate();


  useEffect(()=>{
    const db = getDatabase(app);
    const studentRef = ref(db,'student');
    onValue(studentRef, (snapshot)=>{
      const data = snapshot.val();
      setStudentData(data);
    })
  },[])

  const deleteData = (key)=>{
    const db = getDatabase(app);
    const studentRef = ref(db,'student/'+key);
    const storage = getStorage(app);
    const myRef = storageRef(storage ,  'images/'+key);
    deleteObject(myRef).then(res => {
      remove(studentRef);
    }).catch(err => {console.log(err)});
  }

  return (
    <div>
      <h3>Student List</h3>
      { studentData && (
        <div>
          {Object.entries(studentData).map( ([k,v])=> {
            return (
              <div key={k}>
                <div style={{backgroundColor:'#fefefe',border:'1px solid #dddddd', margin:'10px',padding:'5px', width:'200px', float:'left', boxShadow:'0px 1px 2px #CFC6C6'}}>
                <img style={{width:'200px', height:'100px',borderRadius:'5px'}} src={v.imageUrl} />
                <p><b>{k}</b> | {v.studentName}</p>
                <p>{v.phone}</p>
                <button onClick={()=>{deleteData(k)}} style={{color:'#FF3333'}}>Delete</button>&nbsp;&nbsp;
                <button onClick={()=>{navigate('/dashboard/updateStudent' , {state:[k,v]})}} >Update</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default StudentList
