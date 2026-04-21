import React from 'react'
import hrImg from "../assets/HR.png"
import confidenceImg from "../assets/confi.png"
import techImg from "../assets/tech.png"
import creditImg from "../assets/credit.png"
import { BsMic , BsClock , BsBarChart , BsFileEarmarkText } from "react-icons/bs";
import { motion } from "framer-motion"
import evalImg from "../assets/ai-ans.png"
import resumeImg from "../assets/resume.png"
import pdfImg from "../assets/pdf.png"
import analyticsImg from "../assets/history.png"


const Boxes = () => {
  return (
      
    <div>

        <div className='mb-32'>
                  <motion.h2 
                   initial={{opacity: 0 ,y:20}}
                   whileInView={{opacity:1,y:0}}
                   transition={{duration:0.6}}
                  className='text-4xl font-semibold text-center mb-16'>
                    Advanced AI{" "}
                    <span className='text-green-600 '>Capabilities</span>
                    
                  </motion.h2>
        
                  <div className='grid md:grid-cols-2 gap-10'>
                    {
                      [
                        {
                          image:evalImg,
                          icon:<BsBarChart size={20} />,
                          title:"AI Answer Evaluation",
                          desc:"Scores communication, technical accuracy and confidence."
                        },
                        {
                          image:resumeImg,
                          icon:<BsFileEarmarkText size={20} />,
                          title:"Resume Based Interview",
                          desc:"Project-specific questions based on uploaded resume."
                        },
                        {
                          image:pdfImg,
                          icon:<BsFileEarmarkText size={20} />,
                          title:"Downloadable PDF Report",
                          desc:"Detailed strengths, weaknesses and improvement insights."
                        },
                        {
                          image:analyticsImg,
                          icon:<BsBarChart size={20} />,
                          title:"History & Analytics",
                          desc:"Track progress with performance graphs and topic analysis."
                        }
                      ].map((item , index)=>(
                        <motion.div key={index} 
                         initial={{opacity: 0 ,y:30}}
                         whileInView={{opacity:1,y:0}}
                         transition={{duration:0.5, delay:index*0.1}}
                         whileHover={{scale:1.02}}
                        className='bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all'>
        
                          <div className='flex flex-col md:flex-row items-center gap-8'>
                            {/* left */}
                            <div className='w-full md:w-1/2 flex justify-center'>
                            <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-64'></img>
                            </div>
        
                              {/* right */}
        
                            <div className='w-full md:w-1/2'>
                            <div className='bg-green-50 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 '>
                              {item.icon}
                            </div>
                            <h3 className='font-semibold mb-3 text-xl '>{item.title}</h3>
                            <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
                            </div>
        
                          </div>
        
                        </motion.div>
                      ))
                    }
        
                  </div>
        
                  </div>



      <div className='mb-32'>
          <motion.h2 
           initial={{opacity: 0 ,y:20}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.6}}
          className='text-4xl font-semibold text-center mb-16'>
            Multiple Interview{" "}
            <span className='text-green-600 '>Modes</span>
            
          </motion.h2>

          <div className='grid md:grid-cols-2 gap-10'>
            {
              [
                {
                  image:hrImg,
                  title:"HR Interview Mode ",
                  desc:"Behavioral and communication based evaluation."
                },
                {
                  image:techImg,
                  title:"Technical Mode",
                  desc:"Deep Technical questioning based on selected role."
                },
                {
                  image:confidenceImg,
                  title:"Confidence Detection",
                  desc:"Basic tone and voice analysis insights."
                },
                {
                  image:creditImg,
                  title:"Credits System",
                  desc:"Unlock premium interview sessions easily."
                }
              ].map((item , index)=>(
                <motion.div key={index} 
                 initial={{opacity: 0 ,y:30}}
                 whileInView={{opacity:1,y:0}}
                 transition={{duration:0.5, delay:index*0.1}}
                 whileHover={{scale:1.02}}
                className='bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all'>

                  <div className='flex items-center justify-between gap-6'>
                    {/* left */}
                  <div className='w-1/2'>
                  <h3 className='font-semibold text-xl mb-3'>
                    {item.title}
                  </h3>

                  <p className='text-gray-500 text-sm leading-relaxed '>{item.desc}</p>
                  </div>

                  <div className='w-1/2 flex justify-end '>
                  <img src={item.image} alt={item.title}
                  className='w-28 h-28 obejct-contain '
                   />

                  </div>

                  </div>

                </motion.div>
              ))
            }

          </div>

      </div>
   </div>
  )
}

export default Boxes
