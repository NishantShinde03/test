import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
export default function Edit() {

    const navigate = useNavigate()
    const [todoid,setid]=useState("")
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")

        const {id}=useParams()
      
        const singleData=async()=>{
           const response=await axios.get(`http://localhost:3400/api/v1/single?id=${id}`)
           
            setname(response.data.username)
            setemail(response.data.email)
            setpass(response.data.password)
            setid(response.data._id)
        }

        useEffect(()=>{
            singleData()
        },[])

        const handleUpdate=async(e)=>{
            e.preventDefault()
        const response =  await  axios.patch(`http://localhost:3400/api/v1/update?id=${id}`,{username:name,email,password:pass})
       
       
        toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
           setTimeout(()=>{
            navigate("/about")
           },2000)
        }


  return (
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{height:"100vh"}} >
        
       <div className='container col-xl-6' >
       <form onSubmit={handleUpdate} >
            <input type="text" value={todoid}  className='form-control my-2' />
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className='form-control my-2' />
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className='form-control my-2' />
            <input type="text" value={pass} onChange={(e)=>setpass(e.target.value)} className='form-control my-2' />
            <input type="submit" value="update"  className='btn-success btn' />
        </form>
       </div>
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
theme="colored"
transition={Bounce}
/>
    </div>
  )
}
