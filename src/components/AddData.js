import React from 'react';
import {getDatabase,ref,set} from "firebase/database"
import { app } from '../firebase';

const AddData = () => {
  const addDemoData = (userId,name,phone) => {
    console.log(userId,name,phone);
    const db = getDatabase(app);
    set(ref(db,'student/'+userId) , {
        studentName:name,
        phone:phone
    })
  }

  return (
    <div>
      <h2>Add Data Page</h2>

      <button  onClick={()=>addDemoData(125,'Proyanka' , 6625252525)}>Add Demo Data</button>
    </div>
  )
}

export default AddData
