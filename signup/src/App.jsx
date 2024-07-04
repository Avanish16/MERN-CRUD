import './App.css'
import SignUp from './SignUp/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>} ></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
