import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'


const Navbar = () => {
  return (
    <nav className='z-10 fixed top-0 w-full'>
      <div className='w-full h-15px flex justify-between items-center gap-2 px-3 py-2'>
       <div className='font-bold tezt-xl'>HealthKit</div>
       <div className='w-max flex justify-between items-center gap-2'>
            <Link href="/dashboard">
              <Button variant="ghost" >Dashboard</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" >Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
       </div>
      </div>
    </nav>
  )
}

export default Navbar
