import React  from 'react'
import './App.css'
import Formpage from './Formpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Userdash from './Userdash'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<Formpage />} />
          <Route path='/userdash' element={<Userdash  />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
