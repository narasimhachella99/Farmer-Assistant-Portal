import React, { useEffect, useState } from 'react'
import BuyerNav from '../Navbar/BuyerNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BuyerHome = () => {
  const email=JSON.parse(localStorage.getItem("email"))
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const getData = async () => {
      const res = await axios.get(`http://localhost:8080/api/v1/buyerByEmail/${email}`);
      setData(res.data)
      console.log(res.data)
  }
  useEffect(() => {
      getData();
  }, [])
  return (
    <div>
      <BuyerNav />
      <div className='flex justify-center mt-20'>
        <h2 className='text-white text-4xl'>Welcome to  {data.name}</h2>
      </div>
    </div>
  )
}

export default BuyerHome;