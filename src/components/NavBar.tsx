import React from 'react'
import logo from '@/assets/logo.png'
import {IoIosBody} from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import './NavBar.css'


const NavBar = () => {
  return (
    <nav>
      <Image src={logo} alt="Logo"/>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/profile'><IoIosBody/></Link>
      <button>Sign Out</button>
    </nav>
  )
}

export default NavBar