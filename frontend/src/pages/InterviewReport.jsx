import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import api from '../lib/axios.js'
import Step3Report from "../components/Step3Report.jsx"

const InterviewReport = () => {

  const {id} = useParams()
  const [report, setreport] = useState(null)

  useEffect(()=>{
    const fecthData =  async ()=>{
      try {
        const result = await api.get("/interview/report/" + id)
      setreport(result.data)
      } catch (error) {
        console.log("error in fetchReport " , error)
      }
    }

    fecthData()

  },[])

  if(!report){
    return (
      <div className='min-h-screen flex items-center justify-center '> 
      <p className='text-gray-500 text-lg'>Loading Report...</p>
      </div>
    )
  }
  return <Step3Report report={report} />
}

export default InterviewReport
