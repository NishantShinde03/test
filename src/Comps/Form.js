import React, { useState } from 'react'
import axios from "axios"
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Form() {
 
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    
    const handleSubmit=async(e)=>{
    e.preventDefault()
    const  response=await axios.post("http://localhost:3400/api/v1/register",{username:name,email,password:pass})
        
    toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });


    }
 
    return (
    <div>   
        <form onSubmit={handleSubmit} >
            <input type="text" className='form-control m-1' placeholder='enter username' onChange={(e)=>setname(e.target.value)} />
            <input type="text" placeholder='enter email' className='m-1 form-control'  onChange={(e)=>setemail(e.target.value)} />
            <input type="text" placeholder='enter password'  className=' m-1 form-control'  onChange={(e)=>setpass(e.target.value)} />
            <input type="submit" className='btn btn-primary m-1' />
        </form>




        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>

    </div>
  )
}
