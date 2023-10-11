"use client"
import React from 'react'
import logo from '@/assets/logo.png'
import {IoIosBody} from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import AuthPopup from '../AuthPopup/AuthPopup'
import './NavBar.css'


const NavBar = () => {
  const [islogedin,setIslogedin] = React.useState<boolean>(false)
  const [showpopup,setShowpopup] = React.useState<boolean>(false)
  
  return (
    <nav>
      <Image src={logo} alt="Logo"/>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/profile'><IoIosBody/></Link>
      {
        islogedin?
        <button>LogOut</button>
        :
        <button onClick={()=>{
          setShowpopup(true)
        }}>LogIn</button>
      }
      {
        showpopup && <AuthPopup />
      }
    </nav>
  )
}

export default NavBar