import React, { useEffect, useState } from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import axios from 'axios';
const FarmerNav = () => {
    const [data,setData]=useState([])
    const [product,setProduct]=useState([])
    const [buyer,setBuyer]=useState([])
    const [question,setQuestion]=useState([])
    const [notify,setNotify]=useState([])
    const email=JSON.parse(localStorage.getItem("email"))
    useEffect(()=>{
        const res= axios.get(`http://localhost:8080/api/v1/expert`).then((response)=>{
            setData(response.data)
        })
        const product= axios.get(`http://localhost:8080/api/v1/products`).then((response)=>{
            setProduct(response.data)
        })
        const buyer= axios.get(`http://localhost:8080/api/v1/farmerOrders/${email}`).then((response)=>{
            setBuyer(response.data)
        })
        const question= axios.get(`http://localhost:8080/api/v1/questions`).then((response)=>{
            setQuestion(response.data)
        })
        const notify= axios.get(`http://localhost:8080/api/v1/notification`).then((response)=>{
            setNotify(response.data)
        })
    },[]);
    return (
        <div>
            <nav class="self-center  w-full py-3 bg-gradient-to-l from-sky-600  to-green-600">
                <div class="flex md:flex-row flex-col  justify-between items-center md:items-start">
                    <h1 class=" py-4 text-3xl font-sans font-bold text-slate-300 px-10">Farmer Assistant Portal</h1>
                    <ul class="flex justify-center my-4 items-center text-sm md:text-[18px]  font-bold  md:px-10">
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                            <a href="/profile">Profile</a>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                           
                            <ListItem>
                            <a href="/farmerproducts">Products</a>
                               <ListItemSuffix>
                                   <Chip value={product.length} size="sm"  variant="ghost" color="blue-gray" className="rounded-full bg-red-500" />
                               </ListItemSuffix>
                           </ListItem>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                           
                            <ListItem>
                            <a href="/farmerexperts">Expert</a>
                                <ListItemSuffix>
                                    <Chip value={data.length} size="sm"  variant="ghost" color="blue-gray" className="rounded-full bg-red-500" />
                                </ListItemSuffix>
                            </ListItem>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                            <ListItem>
                            <a href="/farmerorders">Orders</a>
                                <ListItemSuffix>
                                    <Chip value={buyer.length} size="sm"  variant="ghost" color="blue-gray" className="rounded-full bg-red-500" />
                                </ListItemSuffix>
                            </ListItem>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                          
                            <ListItem>
                            <a href="/questions">Ques&Ans</a>
                                <ListItemSuffix>
                                    <Chip value={question.length} size="sm"  variant="ghost" color="blue-gray" className="rounded-full bg-red-500" />
                                </ListItemSuffix>
                            </ListItem>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                            
                            <ListItem>
                            <a href="/farmernotifications">Notifications</a>
                                <ListItemSuffix>
                                    <Chip value={notify.length} size="sm"  variant="ghost" color="blue-gray" className="rounded-full bg-red-500" />
                                </ListItemSuffix>
                            </ListItem>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                            <a href="/">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default FarmerNav;