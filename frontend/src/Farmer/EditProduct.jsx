import React, { useEffect, useState } from 'react'
import FarmerNav from '../Navbar/FarmerNav';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProduct = () => {
  const params=useParams();
  const navigate =useNavigate();
  const [product,setPoduct]=useState({
    name:"",
    type:"",
    price:""
  })
  const handleChange = async(e)=>{
    setData({
        ...data,
        [e.target.name]:e.target.value,
    })
}
  const [data,setData]=useState([])
  useEffect(()=>{
    const res= axios.get(`http://localhost:8080/api/v1/products/${params.id}`).then((response)=>{
      console.log(response.data,"data")
      setData(response.data)
    })
  },[])
  const handleSubmit=async()=>{
    try{
      const res=await axios.patch(`http://localhost:8080/api/v1/products/${params.id}`,data);
      console.log(res.data)
      toast.success("Updated success")
      navigate("/farmerproducts")
    }catch(error){
      toast.error("Not updated")
    }

  }
  return (
    <div>
        <FarmerNav/>
        <div className='grid grid-cols-12 mt-5'>
                <div className='col-start-2 col-end-7 mt-5'>
                    <div className="bg-gray-100 rounded-lg p-8 bg-gradient-to-l from-sky-600  to-green-600 md:ml-auto w-auto mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">EDIT PRODUCT</h2>
                        <div className=' gap-3'>
                            <div className="   mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Product Name</label>
                                <input type="text" id="full-name" name="name" value={data.name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="  mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">ProductType</label>
                                <input type="text" id="email" name="type" value={data.type} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className='gap-3'>
                            <div className="mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Price</label>
                                <input type="number" id="full-name" name="price" value={data.price} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            {/* <div className="  mb-4">
                                <label for="number" className="leading-7 text-sm text-gray-600">PhoneNumber</label>
                                <input type="number" id="number" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div> */}
                        </div>
                        <button
                            onClick={() => handleSubmit()}
                            className="text-white bg-indigo-500 border-0 py-2 bg-gradient-to-l from-sky-600  to-green-600 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
export default EditProduct;