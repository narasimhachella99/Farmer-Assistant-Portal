import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import MainNav from '../Navbar/MainNav';

const BuyerLogin = () => {
    const navigate=useNavigate();
    const [data, setData] = useState({
      email: "",
      password: ""
    })
    const handleChange = async (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
  
      })
    }
    const handleSubmit = async () => {
      try{
        const res = await axios.post(`http://localhost:8080/api/v1/buyerLogin`, data);
        console.log(res.data.msg,"datadasd")
      
        if(res.data.msg === 'Admin Login successfully'){
          toast.success(res.data.msg,{})
          navigate("/adminhome")
        }else{
          toast.success("Buyer Login Successfully")
          localStorage.setItem("email",JSON.stringify(res.data.email))
          navigate("/buyerhome")}
      }catch(error){
        console.log(error)
        toast.error(error.response.data.msg,{})
      }
    }
    return (
        <div>
            <MainNav/>
            <div className='grid grid-cols-12 mt-5'>
                <div className='col-start-3 col-end-6 mt-5'>
                    <div className="  bg-gray-100 rounded-lg p-8  bg-gradient-to-l from-sky-600  to-green-600  md:ml-auto w-96 mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
                        <div className="relative mb-4">
                            <label for="full-name" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" value={data.email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" value={data.password} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <button
                            onClick={() => handleSubmit()}
                            className="text-white bg-indigo-500 bg-gradient-to-l from-sky-600  to-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-1">
                            SignUp for new account? <a href="/buyerregister" class="font-medium text-primary-600 hover:underline dark:text-primary-500 text-white">Register here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyerLogin;