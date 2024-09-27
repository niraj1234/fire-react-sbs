import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{display:'flex' , flexDirection:'row' , maxWidth:'1400px'}}>

      <div style={{width:'20%',backgroundColor:'#acdacd', height:'100vh', padding:'10px'}}>
        <h2>Firebase&nbsp;CRUD</h2>
        <Link to='/dashboard/studentList' style={{color:'#222222',fontWeight:'bold',fontSize:'14px',display:'block',textDecoration:'none',backgroundColor:'#f8f1dd',borderRadius:'4px',margin:'5px',padding:'5px 12px'}}>Student&nbsp;List</Link>
        <Link to='/dashboard/addStudent'  style={{color:'#222222',fontWeight:'bold',fontSize:'14px',display:'block',textDecoration:'none',backgroundColor:'#f8f1dd',borderRadius:'4px',margin:'5px',padding:'5px 12px'}}>Add&nbsp;Student</Link>
        <Link to='/dashboard/facultyList' style={{color:'#222222',fontWeight:'bold',fontSize:'14px',display:'block',textDecoration:'none',backgroundColor:'#f8f1dd',borderRadius:'4px',margin:'5px',padding:'5px 12px'}}>Faculty&nbsp;List</Link>
        <Link to='/dashboard/addFaculty'  style={{color:'#222222',fontWeight:'bold',fontSize:'14px',display:'block',textDecoration:'none',backgroundColor:'#f8f1dd',borderRadius:'4px',margin:'5px',padding:'5px 12px'}}>Add&nbsp;Faculty</Link>
      </div>
      
      <div style={{width:'80%',backgroundColor:'#fafafa', height:'100vh',padding:'10px'}}>
        <h3>Data for</h3>
        <Outlet></Outlet>
      </div>

    </div>
  )
}

export default Dashboard
