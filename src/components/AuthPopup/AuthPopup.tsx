'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import Input from '@mui/joy/Input';
import './AuthPopup.css'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { AiFillDelete,AiOutlineClose } from 'react-icons/ai';
import dayjs from 'dayjs';
// import { useState } from 'react';

// import notificationSound from '../../../public/ThunderClap.mp3';



import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { ToastContainer, toast } from 'react-toastify';


interface AuthPopupProps{
    setShowpopup: React.Dispatch<React.SetStateAction<boolean>>
}

interface SignupFormData {
    name: String | null,
    email: String | null,
    password: String | null,
    weightInKg: Number | null,
    heightInCm: Number | null,
    goal: String | null,
    gender: String | null,
    dob: Date | null,
    activityLevel: String | null
}
interface LoginFormData {
    email: String | null,
    password: String | null
}


const AuthPopup: React.FC<AuthPopupProps> = ({setShowpopup}) => {
    const [showSignUp,setShowSignup] = React.useState<boolean>(false)
    const [signupFormData, setSignupFormData] = React.useState<SignupFormData>({
        name: '',
        email: '',
        password: '',
        weightInKg: 0.0,
        heightInCm: 0.0,
        goal: '',
        gender: '',
        dob: new Date(),
        activityLevel: ''
    })
    const [loginFormData, setLoginFormData] = React.useState<LoginFormData>({
        email: '',
        password: '',
    })
    
    const handleLogin = () => {
        console.log(loginFormData);

        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginFormData),
            
            credentials: 'include'
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log("loginFormData is",loginFormData)
                if (data.ok) {
                    toast.success(data.message)

                    setShowpopup(false)
                }
                else {
                    toast.error(data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }
    const handleSignUp = () =>{
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/register',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(signupFormData),
            credentials:'include'

        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.ok){
                toast.success(data.message,{
                    position: 'bottom-right',
                    autoClose: 3000})
                setShowSignup(false)
            }
            else{
                toast.error(data.message,
                {
                    
                    position: 'bottom-right',
                    autoClose: 1000
                    
                }
                    )
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    ;
  return (


    <div className='popup'>

        <button className='close' onClick={()=>{setShowpopup(false)}}> X </button>

       { showSignUp ?
            (
                                
                <div className='authform'>
            <div className='left'>
                <Image src={logo} alt='logo'/>
            </div>
            <div className='right'>
                <h1>SignUp to become a freak</h1>
                <form action=''>
                <Input
                    color="warning"
                    placeholder="name"
                    size="lg"
                    variant='outlined'
                    onChange={(e)=>{
                        setSignupFormData({
                        ...signupFormData,
                        name:e.target.value
                    })
                }}
                    />
                    <Input
                    color="warning"
                    placeholder="email"
                    size="lg"
                    variant='outlined'
                    type='email'
                    onChange={(e)=>{
                        setSignupFormData({
                        ...signupFormData,
                        email:e.target.value
                    })
                }}
                    />
                    <Input
                    color="warning"
                    placeholder="password"
                    size="lg"
                    variant='outlined'
                    type='password'
                    onChange={(e)=>{
                        setSignupFormData({
                        ...signupFormData,
                        password:e.target.value
                    })
                }}
                    />
                    
                  
                        
                    <Input
                        color="warning"
                        variant='outlined'
                        type='number'
                        size="lg"
                        placeholder="Weight in kg"
                        onChange={(e)=>{
                            setSignupFormData({
                            ...signupFormData,
                            weightInKg:parseFloat(e.target.value)
                        })
                    }}
                        />
                        <Select
                        color="warning"
                        placeholder="Activity Level"
                        size="lg"
                        variant='outlined'

                        onChange={(
                            event: React.SyntheticEvent | null,
                            newValue: string | null,
                        ) => {
                            setSignupFormData({
                                ...signupFormData,
                                activityLevel: newValue?.toString() || ''
                            })
                        }}
                    >
                        
                        <Option value="sedentary">Sedentary</Option>
                        <Option value="light">Light</Option>
                        <Option value="moderate">Moderate</Option>
                        <Option value="active">Active</Option>
                        <Option value="veryActive">Very Active</Option>
                                </Select>
                                <Select
                                    color="warning"
                                    placeholder="Goal"
                                    size="lg"
                                    variant='outlined'
                                    onChange={(
                                        event: React.SyntheticEvent | null,
                                        newValue: string | null,
                                    ) => {
                                        setSignupFormData({
                                            ...signupFormData,
                                            goal: newValue?.toString() || ''
                                        })
                                    }}
                                >
                                    <Option value="weightLoss">Lose</Option>
                                    <Option value="weightMaintain">Maintain</Option>
                                    <Option value="weightGain">Gain</Option>
                                </Select>
                                <Select
                                    color="warning"
                                    placeholder="Gender"
                                    size="lg"
                                    variant='outlined'

                                    onChange={(
                                        event: React.SyntheticEvent | null,
                                        newValue: string | null,
                                    ) => {
                                        setSignupFormData({
                                            ...signupFormData,
                                            gender: newValue?.toString() || ''
                                        })
                                    }}
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                        
                                <label htmlFor="">Height</label>


                    <Input color="warning" size="lg" variant='outlined' type="number" placeholder='cm'
                        onChange={(e) => {
                            setSignupFormData({
                                ...signupFormData,
                                heightInCm: parseFloat(e.target.value)
                            })
                        }}
                    />
                    <label htmlFor="">Date of Birth</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker defaultValue={dayjs(new Date())}
                                sx={{
                                    backgroundColor: 'white',
                                }}

                                onChange={(newValue) => {
                                    setSignupFormData({
                                        ...signupFormData,
                                        dob: new Date(newValue as any)
                                    })
                                }}
                            />
                        </LocalizationProvider>

                <button onClick={(e)=>{
                        e.preventDefault()
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
                    onChange = {(e)=>{
                        e.preventDefault()
                        setLoginFormData({
                        ...loginFormData,
                        email:e.target.value
                    })}}
                    />
                <Input
                    color="warning"
                    placeholder="password "
                    size="lg"
                    variant='outlined'
                    type='password'
                    onChange={(e)=>{
                        setLoginFormData({
                        ...loginFormData,
                        password:e.target.value
                    })
                }}
                    />
                <button onClick={(e)=>{
                    e.preventDefault()
                    handleLogin()}}>
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