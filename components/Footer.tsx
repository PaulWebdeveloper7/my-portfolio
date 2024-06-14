'use client'
import React from 'react'
import { ButtonsCard } from "./ui/tailwind-buttons";
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import LayersIcon from '@mui/icons-material/Layers';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import ShareIcon from '@mui/icons-material/Share';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { WhatsappIcon ,WhatsappShareButton , FacebookIcon , PinterestIcon  ,TelegramIcon, TelegramShareButton , FacebookShareButton, PinterestShareButton  } from 'react-share'
import { Instagram } from '@mui/icons-material';
interface props{
  url:string;
}

const Footer = () => {
    const [sharebtn, setSharebtn] = useState(false);
    function close() {
        setSharebtn(false)
      }
  return (
    <div className=' h-screen'>
      <h1 className=' text-center text-5xl font-extrabold'>
      Elevate your digital presence to new heights?
      </h1>
      <div className=' flex gap-6 justify-center items-center' id='contactme'>
      <a href="mailto:komalpaul403@gmail.com">
          <ButtonsCard
            title="Let's get in touch"
            icon={<MailIcon/>}
          />
        </a>
         <ButtonsCard title=' '
         icon={<ShareIcon/>}
         onClick={()=>{
          if (navigator.clipboard) {
              navigator.clipboard.writeText('http://localhost:3000/');
              console.log('copied to clipboard successfully')
            }
            setSharebtn(true) ; 
      }
        }
         />
           {
            sharebtn &&
            <>
            <Transition appear show={sharebtn}>
        <Dialog as="div" className="relative z-10 focus:outline-none w-60 h-70" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                    Share this product with others
                  </DialogTitle>
                 
                  <div className='icons flex gap-7 justify-center mt-7'>
                    <WhatsappShareButton url={'http://localhost:3000/'}>
                    <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>  
                    <FacebookShareButton url={'http://localhost:3000/'}>
                    <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                    <TelegramShareButton url={'http://localhost:3000/'}>
                    <TelegramIcon size={32} round={true}/>
                    </TelegramShareButton>
                    <PinterestShareButton url={'http://localhost:3000/'} media={'assets/icons/share.svg'}>
                   <PinterestIcon size={32} round={true}/>
                    </PinterestShareButton>
                      </div>
                  <div className="mt-4 flex justify-end items-end">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                      >
                      close
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
            </>
            
        }
      </div>
      <div className='flex  justify-center mt-11 items-center flex-col mb-5'>
         <p> Copyright  © 2024 Komal paul</p>
         <div className='flex flex-row gap-2'>
          <Link href={'https://github.com/PaulWebdeveloper7'}><GitHubIcon/></Link>
          <Link href={'https://linkedin.com/in/Komalpaul'}><LinkedInIcon/></Link>
          <Link href={'https://stackoverflow/users/23360511/komal-paul'}><LayersIcon/></Link>
          <Link href={'https://twitter.com/in/Komalpaul'}><TwitterIcon/></Link>
          <Link href={'https://www.youtube.com/KomalWebdeveloper/'}><YouTubeIcon/></Link>
          <Link href={'https://www.instagram.com/koml_654/'}><Instagram/></Link>

         </div>
      </div>
    </div>
  )
}

export default Footer;