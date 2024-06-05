'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const router = useRouter();
  return (
    <div>

    <div className=' fixed flex justify-between w-full h-10 p-8 items-center bg-black z-50'>
        <div className=' flex items-center gap-3'>
            <Image src={'/images/komalportfolio.jpg'} priority width={40} height={40} alt='My portfolio image ' className='rounded-full'/>
        </div>
        <div className='md:hidden'>
        {
            isOpen ?(
                <CloseIcon onClick={()=>{setOpen(false)}}/>
            ):(
                <MenuIcon onClick={()=>{setOpen(true)}}/>
            )
        }
          
        </div>
        {/* large devices  */}
        <div className=' max-md:hidden'>
          
           <nav className='flex gap-10 text-lg	list-none '>
            <Link href={'/'}><li>Home</li></Link>     
            <Link href={'#aboutme'}><li>About me </li></Link>          
            <Link href={'#projects'}><li>Projects</li></Link>         
            <Link href={'#contactme'}><li>Contact me </li></Link>            
            <Link href={'#testimonials'}><li>Testimonials</li></Link>
            <li onClick={()=>{router.push('https://docs.google.com/document/d/13niJX4kI6u9WQ9QpnJaIWGMQRoyHbEm8/edit?usp=sharing&ouid=114766926513495289523&rtpof=true&sd=true')}}>Resume</li>
           </nav>
        </div>
    </div>
    {/* </div> */}
  {
      isOpen && (
     
          <nav className=' flex justify-center  w-full  items-center  bg-black  p-10 fixed z-50 h-full mt-16'>
          <ol className='flex gap-12 flex-col h-full'>
          <Link href={'/'}
          onClick={()=>{setOpen(false)}}
          ><li>Home</li></Link>     
            <Link href={'#aboutme'}
            onClick={()=>{setOpen(false)}}
            ><li>About me </li></Link>          
            <Link href={'#projects'}
            onClick={()=>{setOpen(false)}}
            ><li>Projects</li></Link>   
             <Link href={'#approach'}
            onClick={()=>{setOpen(false)}}
            ><li>My Strategy</li></Link>       
            <Link href={'#contactme'}
            onClick={()=>{setOpen(false)}}
            >
                <li>Contact me </li></Link>            
            <Link href={'#testimonials'}
            onClick={()=>{setOpen(false)}}
            ><li>Testimonials</li></Link>
            <li onClick={()=>{
                router.push('https://docs.google.com/document/d/13niJX4kI6u9WQ9QpnJaIWGMQRoyHbEm8/edit?usp=sharing&ouid=114766926513495289523&rtpof=true&sd=true')
                setOpen(false)
                }}>Resume</li>

          </ol>
          </nav>
    )
}
    </div>
)}
export default Navbar