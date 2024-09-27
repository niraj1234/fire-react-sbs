import './App.css';
import AddData from './components/AddData';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';
import AddFaculty from './components/AddFaculty';
import FacultyList from './components/FacultyList';
import UpdateFaculty from './components/UpdateFaculty';
import Login from './components/Login';
import Signup from './components/Signup';


const myRouter = createBrowserRouter([
  {path:'login' , Component:Login},
  {path:'signup' , Component:Signup},
  {path:'dashboard',Component:Dashboard ,
      children:[
      {path:'', Component:StudentList},
      {path:'addStudent', Component:AddStudent},
      {path:'updateStudent', Component:UpdateStudent},
      {path:'studentList', Component:StudentList},
      {path:'addFaculty', Component:AddFaculty},
      {path:'updateFaculty', Component:UpdateFaculty},
      {path:'facultyList', Component:FacultyList}
    ]}
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  );
}

export default App;
