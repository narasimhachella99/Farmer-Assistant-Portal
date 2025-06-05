import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ExpertNav from '../Navbar/ExpertNav'

const Warnings = () => {
    const [data, setData] = useState([])
    const email = JSON.parse(localStorage.getItem("email"))
    useEffect(() => {
        const res = axios.get(`http://localhost:8080/api/v1/warnings/${email}`).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    }, [])
    return (
        <div>
            <section className="body">
                <ExpertNav />
                <div className="container mx-auto mt-5">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="max-w-full overflow-x-auto">
                                <div class="flex justify-center">
                                    <h2 className="text-4xl">All Warnings</h2>
                                </div>
                                <br />
                                <table className="w-full table-auto bg-gradient-to-l from-sky-600  to-green-600">
                                    <thead>
                                        <tr className="bg-primary text-center">
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Id
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Warnings
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((data, index) => {
                                            return (
                                                <tr>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.id}

                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.warning}
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

export default Warnings;