import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Input } from "@material-tailwind/react";
import AdminNav from '../Navbar/AdminNav';
const AddNotification = () => {
    const [data, setData] = useState({
        type: "",
        subject: ""
    })
    const handleChange = async (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async () => {
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/notification`, data);
            console.log(res.data, "data")
            toast.success("published success")
        } catch (error) {
            toast.error("Not published")
        }
    }
    return (
        <div>
            <AdminNav/>
            <div className='flex justify-center'>
                <div className=' w-3/5 bg-white shadow-md mt-10 p-8 rounded pt-6 pb-8  '>
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Publish Notification Here</h2>
                    <hr />
                    <div className=" md:w-1/2  mb-4">
                        <label for="full-name" className="leading-7 text-sm text-gray-600">Notification Type</label>
                        <input type="text" id="full-name" name="type" value={data.type} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                   
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <textarea
                            class="peer block min-h-[auto] w-full rounded border border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea1"
                            rows="3" name='subject' value={data.subject} onChange={handleChange}
                            placeholder="Your message"></textarea>
                        <label
                            for="exampleFormControlTextarea1"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Write here </label>
                    </div>
                    <button
                        onClick={() => handleSubmit()}
                        className="text-white bg-indigo-500 bg-gradient-to-l from-sky-600  to-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddNotification;