import React, { useEffect, useState } from 'react'
import FarmerNav from '../Navbar/FarmerNav';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
    const email=JSON.parse(localStorage.getItem("email"))
    const [data,setData]=useState([])
    const navigate=useNavigate();
    const [farmer,setFarmer]=useState({
        name:"",
        email:"",
        password:"",
        phoneNumber:""
    })
    const handleChange=async(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }
    useEffect(()=>{
        const res= axios.get(`http://localhost:8080/api/v1/farmerByEmail/${email}`).then((response)=>{
            console.log(response.data,"data")
            setData(response.data)
        })
    },[])
    const handleSubmit = async(e)=>{
        try{
            const res= await axios.patch(`http://localhost:8080/api/v1/farmer/${data.id}`,data);
            toast.success("Profile Updated")
            
        }catch(error){
            toast.error("Not Updated")
        }
    }
    return (
        <div>
            <FarmerNav />
            <div className='grid grid-cols-12 mt-5'>
                <div className='col-start-2 col-end-7 mt-5'>
                    <div className="bg-gray-100 rounded-lg p-8 bg-gradient-to-l from-sky-600  to-green-600 md:ml-auto w-auto mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">MY PROFILE</h2>
                        <div className=' flex gap-3'>
                            <div className=" md:w-1/2  mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" id="full-name" name="name" value={data.name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className=" md:w-1/2 mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" value={data.email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <div className=" md:w-1/2  mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="text" id="full-name" name="password" value={data.password} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className=" md:w-1/2 mb-4">
                                <label for="number" className="leading-7 text-sm text-gray-600">PhoneNumber</label>
                                <input type="number" id="number" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <button
                            onClick={() => handleSubmit()}
                            className="text-white bg-indigo-500 border-0 py-2 bg-gradient-to-l from-sky-600  to-green-600 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">EDIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;