import React from 'react'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
//Bootsrapdan olib kelish uchun ularni import qilib olish kerak 'reacstrap'deb!
import Menhaqimda from './Components/About me';
import Projects from './Components/Projects';
import MyNavbar from './Components/Navbar';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import './i18n';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='App' >
<MyNavbar/>

<Menhaqimda/>
<br /><br /><br /><br /><br /><br />
<hr />
<Projects/>
<hr />
<Skills/>
<hr />
<Contact/>
<Footer />
    </div>
  )
}

export default App
