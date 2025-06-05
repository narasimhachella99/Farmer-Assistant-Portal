import React from 'react'
import AdminNav from '../Navbar/AdminNav';

const AdminHome = () => {
  return (
    <div className='body'>
      <AdminNav/>
      <div className='flex justify-center mt-20'>
        <h2 className='text-white text-4xl'>Welcome to  Admin</h2>
      </div>
    </div>
  )
}

export default AdminHome;