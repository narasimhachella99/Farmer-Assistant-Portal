import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNav from '../Navbar/AdminNav'
import { useNavigate } from 'react-router-dom'

const AdminBuyers = () => {
    const [data, setData] = useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        const res= axios.get(`http://localhost:8080/api/v1/buyer`).then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    },[])
    return (
        <div>
            <AdminNav/>
            <section className="body">
                <div className="container mx-auto mt-5">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="max-w-full overflow-x-auto">

                                <div class="flex justify-center">
                                    <h2 className="text-4xl">All Buyers</h2>
                                </div>


                                <br />
                                <table className="w-full table-auto bg-gradient-to-l from-sky-600  to-green-600">
                                    <thead>
                                        <tr className="bg-primary text-center">

                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Name
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Email
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Password
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                PhoneNumber
                                            </th>

                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((data, index) => {
                                            return (
                                                <tr>

                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.name}

                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.email}
                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.password}
                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.phoneNumber}
                                                    </td>

                                                    <td
                                                        className="text-dark border-b  border-r border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >

                                                        <button onClick={() => navigate(`/editbuyer/${data.email}`)}

                                                            className="border-primary text-primary w-full bg-green-500 hover:bg-primary inline-block   py-2 px-6 hover:text-white"
                                                        >
                                                            Edit
                                                        </button>

                                                    </td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminBuyers;