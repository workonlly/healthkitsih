import React from 'react'

const Background = () => {
    const strip = 8;

  return (
    <div className='h-screen w-full absolute -z-10 grid grid-cols-8 gap-8 bg-black'>
      {Array.from({length:strip}).map((_,i)=>(
        <div key={i} className='h-screen w-full bg-gradient-to-b from-[#0A0A0A] from-0% via-[#171717] via-50% to-[#0A0A0A] to-100%'></div>
      ))}
    </div>
  )
}

export default Background
