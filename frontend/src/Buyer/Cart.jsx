import React, { useEffect, useState } from 'react'
import BuyerNav from '../Navbar/BuyerNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Cart = () => {
    
    const [amount, setAmount] = useState([]);
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const email = JSON.parse(localStorage.getItem("email"))
    const navigate = useNavigate();
    const getData = async () => {
        const res = await axios.get(`http://localhost:8080/api/v1/cart/${email}`);
        setCart(res.data)
        console.log(res.data)
    }
    console.log(data, "data")
    useEffect(() => {
        getData();
    }, [])

    const [order, setOrder] = useState({
        productName: "",
        productType: "",
        price: null,
        quantity: null,
        totalAmount: null
    })
    const [product, setProduct] = useState({
        quantity: null,
        total: null
    })
    const handleChange = async (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (id) => {
        console.log(id,"idgkk")
        const res = await axios.delete(`http://localhost:8080/api/v1/cart/${id}`, data)
        toast.success("deleted successfully")
        navigate("/cart")
    }
    const getAmount = async (item) => {
        console.log(item.id, "Item Id")
        const res = await axios.post(`http://localhost:8080/api/v1/addQuantity/${item.id}`, data)
        getData();
    }
    const checkout = async()=>{
        try{
            const res= await axios.post(`http://localhost:8080/api/v1/checkout/${email}`,data);
            console.log(res.data,"data")
            toast.success("Ordered successfully")
            navigate("/payment")
        }catch(error){
            toast.error("Something went wrong")
        }
        

    }

    return (
        <div>
            <BuyerNav />
            <section className="body">
                <div className="container mx-auto mt-5">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="max-w-full overflow-x-auto">
                                <div class="flex justify-center">
                                    <h2 className="text-4xl">Cart Products</h2>
                                </div>
                                {/* <div class="flex justify-end">
                  <h2 className="border-primary bg-blue-500 w-fit text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
                   ><a href="/marksgraph">Total Graph</a></h2>
                </div> */}
                                <br></br>
                                {/* <div class="flex justify-start">
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
                                                Name
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Type
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Price
                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7  lg:px-4"
                                            >Quantity

                                            </th>
                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7  lg:px-4"
                                            >Total Amount

                                            </th>

                                            <th
                                                className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => {
                                            return (
                                                <tr>

                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{item.productName}

                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{item.productType}
                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >{item.price}
                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >   <input type="number" id="email" name="quantity" value={product.quantity} onChange={handleChange} className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                        <button onClick={() => getAmount(item)}
                                                            className="border-primary text-primary w-full bg-green-500 hover:bg-primary inline-block   py-2 px-6 hover:text-white"
                                                        >
                                                            add
                                                        </button>
                                                    </td>
                                                    <td
                                                        className="text-dark border-b border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >  {item.total}

                                                    </td>

                                                    <td
                                                        className="text-dark border-b  border-r border-[#E8E8E8]  py-5 px-2 text-center text-base font-medium"
                                                    >
                                                        <button onClick={() => handleSubmit(item.id)}
                                                            className="border-primary text-primary w-full bg-green-500 hover:bg-primary inline-block   py-2 px-6 hover:text-white"
                                                        >
                                                            Remove
                                                        </button>
                                                    </td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <br />
                                <div className='justify-content-center'>
                                    <button onClick={() => checkout()}
                                        className="border-primary  text-primary w-96 bg-blue-500 hover:bg-primary inline-block   py-2 px-6 hover:text-white"
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart;
