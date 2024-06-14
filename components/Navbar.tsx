"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';  
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from "@mui/icons-material/Menu";
import ContactsIcon from '@mui/icons-material/Contacts';
import CloseIcon from "@mui/icons-material/Close";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from "next/navigation";
import ThemeSwitch from "./themeSwitch";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <motion.div
  
    >
      <motion.div
        className=" fixed flex justify-between w-full h-10 p-8 items-center z-50 bg-black text-white"
        
      >
        <div className=" flex items-center gap-3">
          <Image
            src={"/images/komalportfolio.jpg"}
            priority
            width={40}
            height={40}
            alt="My portfolio image "
            className="rounded-full"
          />
        </div>
        <div className="md:hidden flex text-3xl gap-5 items-center justify-center">
          <div>
            <ThemeSwitch/>
          </div>
          <div>
          {isOpen ? (
            <CloseIcon
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <MenuIcon
              onClick={() => {
                setOpen(true);
              }}
            />
            )}
          </div>
        </div>
        {/* large devices  */}
        <div className=" max-md:hidden">
          <nav className="flex gap-10 text-lg	list-none ">
            <Link href={"/"}>
              <motion.li
                whileHover={{ scale: 1.4 , color: '#0000FF	'}}
                whileTap={{ scale: 0.9 }}
              >
                Home
              </motion.li>
            </Link>
            <Link href={"#aboutme"}>
              <motion.li
                whileHover={{ scale: 1.4 , color: '#0000FF	'	}}
                whileTap={{ scale: 0.9 }}
              >
                About me{" "}
              </motion.li>
            </Link>
            <Link href={"#projects"}>
              <motion.li
                whileHover={{ scale: 1.4 , color: '#0000FF	'}}
                whileTap={{ scale: 0.9 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link href={"#contactme"}>
              <motion.li
                whileHover={{ scale: 1.4 , color: '#0000FF	'}}
                whileTap={{ scale: 0.9 }}
              >
                Contact me{" "}
              </motion.li>
            </Link>
            <Link href={"#testimonials"}>
              <motion.li
                whileHover={{ scale: 1.4 , color: '#0000FF	'}}
                whileTap={{ scale: 0.9 }}
              >
                Testimonials
              </motion.li>
            </Link>
            <motion.li
              whileHover={{ scale: 1.4 , color: '#0000FF	' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                router.push(
                  "https://docs.google.com/document/d/13niJX4kI6u9WQ9QpnJaIWGMQRoyHbEm8/edit?usp=sharing&ouid=114766926513495289523&rtpof=true&sd=true"
                );
              }}
            >
              Resume
            </motion.li>
              <motion.li
                whileHover={{ scale: 1.4 , color: '#0000FF	'}}
                whileTap={{ scale: 0.9 }}
              >
                 <ThemeSwitch/>
              </motion.li>
          </nav>
        </div>
      </motion.div>
      {/* </div> */}
      {isOpen && (
        <motion.nav className=" flex justify-center  w-full  items-center    p-10 fixed z-50 h-full mt-16 bg-black text-white " initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.9, type: "spring", stiffness: 40 }}>
          <ol className="flex gap-12 flex-col h-full">
            <Link
              href={"/"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <li>Home  <HomeIcon/></li>
            </Link>
            <Link
              href={"#aboutme"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <li>About me  <InfoIcon/> </li>
             
            </Link>
            <Link
              href={"#projects"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <li>Projects  <AccountTreeIcon/></li>
            </Link>
            <Link
              href={"#approach"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <li>My Strategy <AddTaskIcon/></li>
            </Link>
            <Link
              href={"#contactme"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <li>Contact me  <ContactsIcon/> </li>         
            </Link>
            <Link
              href={"#testimonials"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <li>Testimonials  <SpeakerNotesIcon/></li>           
            </Link>
            <li
              onClick={() => {
                router.push(
                  "https://docs.google.com/document/d/13niJX4kI6u9WQ9QpnJaIWGMQRoyHbEm8/edit?usp=sharing&ouid=114766926513495289523&rtpof=true&sd=true"
                );
                setOpen(false);
              }}
            >
              Resume <ArticleIcon/>
            </li>
          </ol>
        </motion.nav>
      )}
    </motion.div>
  );
};
export default Navbar;
