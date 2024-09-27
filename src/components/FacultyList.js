import React, { useEffect, useState } from 'react';
import {app} from '../firebase';
import {getDocs,collection,getFirestore, doc, deleteDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const FacultyList = () => {

  const [facultyData,setFacultyData] = useState([]);
    const navigate = useNavigate();

    useEffect( ()=>{
        getData();
    },[]);

    const getData = async ()=> {
        const db = getFirestore(app);
        const docRef = collection(db,'faculty');
        const docSnap = await getDocs(docRef);
//      const docSnap = await getDocs(collection(getFirestore(app),'faculty'));

        const responseData = docSnap.docs.map( doc => ({
            id:doc.id,
            ...doc.data()
        }));
//      console.log(responseData);
        setFacultyData(responseData);
    }

    const deleteData = async (id)=> {
      const db = getFirestore(app);
      const dataRef = doc(db,'faculty' ,id);
      try{
        await deleteDoc(dataRef);
        getData();
      } catch(err){
        console.log(err);
      }
    }

return (
    <div>
      <h3>Faculty List </h3>
      {facultyData.map(f => {
        return (
            <div key={f.id}>
                <p>{f.facultyName} | {f.phoneNumber}</p>
                <button onClick={()=>{deleteData(f.id)}}>Delete</button>&nbsp;
                <button onClick={()=>{navigate('/dashboard/updateFaculty', {state:f})}}>Update</button>
            </div>
        )
      })}
    </div>
  )

}
export default FacultyList
