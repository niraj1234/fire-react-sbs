import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
        <h2>Welcome to React Firebase Application</h2>
    <div style={{backgroundColor:'#BB7788', padding:'20px',borderBottom:'3px solid #DD8888', margin:'10px'}}>
      <Link style={{ fontSize:'18px', padding:'5px' , margin:'10px'}} to='/login'>Login</Link>
      <Link style={{ fontSize:'18px', padding:'5px' , margin:'10px'}} to='/signup'>Signup</Link>
      <Link style={{ fontSize:'18px', padding:'5px' , margin:'10px'}} to='/dashboard/studentList'>Student List</Link>
      <Link style={{ fontSize:'18px', padding:'5px' , margin:'10px'}} to='/dashboard/facultyList'>Faculty List</Link>
    </div>
    </div>
  )
}
export default Welcome
