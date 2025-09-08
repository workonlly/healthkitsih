import React from 'react'
import { TextareaForm } from '@/components/text-area-form'
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <>
        <Background/>
        <Navbar/>
        <div className='min-h-screen w-full flex justify-center items-center'>
            <div className='h-max w-max bg-accent flex flex-col justify-center items-center p-5 rounded-[15px]'>
                <h1 className="text-left w-full text-xl font-medium md:text-2xl relative mb-[15px] before:content-[''] before:absolute before:-bottom-[5px] before:bg-white before:w-full before:h-[1px] ">Feedback</h1>
                <TextareaForm/>
            </div>
            
        </div> 
    </>
  )
}

export default page
