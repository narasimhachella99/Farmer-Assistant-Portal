import React, { useEffect, useState } from 'react'
import FarmerNav from '../Navbar/FarmerNav';
import axios from 'axios';

const FarmerOrders = () => {
    const [data,setData]=useState([])
    const email = JSON.parse(localStorage.getItem("email"))
    useEffect(()=>{
        const res= axios.get(`http://localhost:8080/api/v1/farmerOrders/${email}`).then((response)=>{
            console.log(response.data,"data")
            setData(response.data)
        })
    },[])
  return (
    <div>
        <FarmerNav/>
         <section className="body">
                <div className="container mx-auto mt-5">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="max-w-full overflow-x-auto">
                                <div class="flex justify-center">
                                    <h2 className="text-4xl">All Orders</h2>
                                </div>
                                {/* <div class="flex justify-end">
                  <h2 className="border-primary bg-blue-500 w-fit text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
                   ><a href="/marksgraph">Total Graph</a></h2>
                </div> */}
                                {/* <br></br>
                                <div class="flex justify-start">
                                    <button
                                        onClick={() => navigate(`/addproducts`)}
                                        className="border-primary bg-green-600 w-fit text-white hover:bg-primary inline-block rounded  py-2 px-6 hover:text-white"
                                    >
                                        Add Products
                                    </button>
                                </div> */}
                                <br />
                                <table className="w-full table-auto bg-gradient-to-l from-sky-600  to-green-600">
                                    <thead>
                                        <tr className="bg-primary text-center">

                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                ProductName
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                ProductType
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Quantity
                                            </th>

                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Price
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((data, index) => {
                                            return (
                                                <tr>

                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.productName}

                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.productType}
                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.quantity}
                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.price}
                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{data.total}
                                                    </td>

                                                    {/* <td
                                                        className="text-dark border-b  border-r border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >
                                                        <button onClick={() => navigate(`/editproduct/${data.id}`)}

                                                            className="border-primary text-primary w-full bg-green-500 hover:bg-primary inline-block   py-2 px-6 hover:text-white"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button onClick={() => handleSubmit(data.id)}

                                                            className="border-primary text-primary w-full bg-pink-600 hover:bg-primary inline-block   py-2 px-6 hover:text-white"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td> */}

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

export default FarmerOrders;