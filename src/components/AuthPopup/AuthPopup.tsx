'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import Input from '@mui/joy/Input';
import './AuthPopup.css'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


const AuthPopup = () => {
    const [showSignUp,setShowSignup] = React.useState<boolean>(false)
  return (


    <div className='popup'>
       { showSignUp ?
            ( <div className='authform'>
            <div className='left'>
                <Image src={logo} alt='logo'/>
            </div>
            <div className='right'>
                <h1>SignUp to become a freak</h1>
                <form action="">
                <Input
                    color="warning"
                    placeholder="email"
                    size="lg"
                    variant='outlined'
                    type='email'
                    />
                <Input
                    color="warning"
                    placeholder="password "
                    size="lg"
                    variant='outlined'
                    type='password'
                    />
                    <div className='form_input_leftright'>
                    <Input
                        color="warning"
                        variant='outlined'
                        type='number'
                        size="lg"
                        placeholder="Age"
                        />
                    <Input
                        color="warning"
                        variant='outlined'
                        type='number'
                        size="lg"
                        placeholder="Weight"
                        />
                     </div>
                     <Select
                        color="warning"
                        placeholder="gender"
                        >
                        <Option  variant='outlined' value="male">Male</Option>
                        <Option  variant='outlined' value="female">Female</Option>
                        <Option  variant='outlined' value="other">Other</Option>
                        </Select>
                    <label htmlFor=''>Height</label>
                    <div className='form_input_leftright'>
                        <Input
                            color="warning"
                            variant='outlined'
                            type='number'
                            size="lg"
                            placeholder="ft" />
                        <Input
                            color="warning"
                            variant='outlined'
                            type='number'
                            size="lg"
                            placeholder="inch" />
                    </div>

                    
                    <button onClick={()=>{
                        handleSignUp()
                        }}>SignUp</button>
                </form>
                <p>Already have an account? <button onClick={()=>{
                setShowSignup(false)
            }}>LogIn</button> </p>
            </div>
            
            
            
        </div>)  
               
            :
           
            (
             <div className='authform'>
            <div className='left'>
                <Image src={logo} alt='logo'/>
            </div>
            <div className='right'>
                <h1>LogIn to become a freak</h1>
                <form action="">
                <Input
                    color="warning"
                    placeholder="email"
                    size="lg"
                    variant='outlined'
                    type='email'
                    />
                <Input
                    color="warning"
                    placeholder="password "
                    size="lg"
                    variant='outlined'
                    type='password'
                    />
                <button onClick={()=>{handleLogIn()}}>
                   LogIn                      
                        
                </button>
                </form>
                <p>Dont have an account? <button onClick={()=>{
                    setShowSignup(true)
                    }}>SignUp</button> </p>
            </div>
            
            
            
        </div>)
        }
    </div>
  )
}

export default AuthPopup