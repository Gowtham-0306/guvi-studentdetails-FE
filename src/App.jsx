import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar/navbar'

import { BrowserRouter , Route , Routes , Link} from 'react-router-dom';
import Studentdatas from './components/studentdataform'

import { SeeStudentdatas } from './components/studentdatas'
function App() {
  const [studentdatas, setstudentdatas] = useState([]);

  function HandlDownloaddatas(datas){

setstudentdatas(datas);




  }

  return (
    <>
      <div>


      <BrowserRouter >

<Routes>






<Route path="/" element={<Studentdatas   HandlDownloaddatas={HandlDownloaddatas}/>} /> 
<Route path="/seestudentdatas" element={<SeeStudentdatas studentdatas = {studentdatas}/>} /> 

</Routes>
</BrowserRouter>


      </div>
  
  
    </>
  )
}

export default App
