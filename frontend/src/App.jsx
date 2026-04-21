import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Auth from './pages/Auth'
import Interview from "./pages/Interview.jsx"
import { useEffect } from 'react'
import api from './lib/axios.js'
import { useDispatch } from 'react-redux'
import { setUserData } from './lib/userSlice.js'
import History from './pages/History.jsx'
import InterviewReport from './pages/InterviewReport.jsx'
import Pricing from './pages/Pricing.jsx'


function App() {

  const dispatch = useDispatch()

useEffect(()=>{
    const getUser = async()=>{
  try {
      const result = await api.get("/user/getuser")
      dispatch(setUserData(result.data))
      
    } catch (error) {
      console.log("error in fetching current user" , error)
      dispatch(setUserData(null))
    }
  }
    getUser()

}, [dispatch])

  return (
   <Routes>
    <Route path="/" element ={<Home/>}></Route>
    <Route path='/auth' element={<Auth/>} />
    <Route path='/interview' element={<Interview/>}  />
    <Route path='/history' element={<History/>}  />
    <Route path='/pricing' element={<Pricing/>}  />
    <Route path='/report/:id' element={<InterviewReport/>}  />
   </Routes>
  )
}

export default App
