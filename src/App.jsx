import React from 'react'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
//Bootsrapdan olib kelish uchun ularni import qilib olish kerak 'reacstrap'deb!
import Menhaqimda from './Components/About me';
import Projects from './Components/Projects';
import MyNavbar from './Components/Navbar';



const App = () => {
  return (
    <div className='App' >
<MyNavbar/>
<Menhaqimda/>
<br /><br /><br /><br />
<Projects/>


    </div>
  )
}

export default App
