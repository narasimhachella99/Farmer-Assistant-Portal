import React, { useState } from 'react'
import FarmerNav from '../Navbar/FarmerNav';
// Initialization for ES Users
import {
    Input,
    initTE,
} from "tw-elements";
import axios from 'axios';
import { toast } from 'react-toastify';


const AskQuestion = () => {
    const [data, setData] = useState({
        question: "",
        answer: ""
    })
    initTE({ Input });
    const handleChange = async (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async () => {
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/questions`, data)
            toast.success("Question Sent Success")
            setData({
                question:"",
                answer:"",
                farmerEmail:""
            })
        } catch (error) {
            toast.error("Not sent")
        }
    }

    return (
        <div>
            <FarmerNav />
            <div className='flex justify-center'>
                <div className=' w-3/5 bg-white shadow-md mt-10 p-8 rounded pt-6 pb-8  '>
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Submit your  Question</h2>
                    <hr />
                    <div class="relative mb-3" data-te-input-wrapper-init>
                        <textarea
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea1"
                            rows="3" name='question' value={data.question} onChange={handleChange}
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

export default AskQuestion;