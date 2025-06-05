import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import BuyerNav from '../Navbar/BuyerNav';
import MainNav from '../Navbar/MainNav';

const BuyerRegister = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: null
    })
    const handleChange = async (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/v1/buyerRegister', data);
            console.log(res.data, "data")
            toast.success("Registration done successfully")
            setData({
                name: "",
                email: "",
                password: "",
                phoneNumber: 0
            })
        } catch (error) {
            toast.error(error.response.data.msg, {})
        }
    }
    return (
        <div>
            <MainNav/>
            <div className='grid grid-cols-12 mt-5'>
                <div className='col-start-2 col-end-7 mt-5'>
                    <div className="bg-gray-100 rounded-lg p-8 bg-gradient-to-l from-sky-600  to-green-600 md:ml-auto w-auto mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
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
                            className="text-white bg-indigo-500 border-0 py-2 bg-gradient-to-l from-sky-600  to-green-600 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-1">
                            SignIn to your account? <a href="/buyerlogin" class="font-medium text-white hover:underline dark:text-primary-500">Login Here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerRegister;