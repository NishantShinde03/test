import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

export default function Table() {

    const navigate = useNavigate()
    const [value,setvalue] = useState([])

    const  fetchData=async()=>{
      const {data} =  await axios.get("http://localhost:3400/api/v1/user")
           setvalue(data)
    }

    useEffect(()=>{
        fetchData()
    })

    const handleDelete=async(id)=>{
        const response =await axios.delete(`http://localhost:3400/api/v1/userDelete?id=${id}`)
        toast.info(response.data.message, {
            position: "top-right",
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

    const handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }


    return (
        <div className='container ' >
            <table className='table table-bordered ' >
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>username</th>
                        <th>Email</th>
                        <th colSpan={3} >password</th>
                    </tr>
                    {
                        value.map((val,ind)=>{
                            return(
                                <tr key={ind} >
                                    <td>{val._id}</td>
                                    <td>{val.username}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td><button className='btn btn-danger'onClick={()=>handleDelete(val._id)} >Delete</button></td>
                                    <td><button className='btn btn-warning'onClick={()=>handleEdit(val._id)} >Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <ToastContainer
position="top-right"
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
