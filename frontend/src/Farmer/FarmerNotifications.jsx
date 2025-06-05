import React, { Fragment, useEffect, useState } from 'react'
import FarmerNav from '../Navbar/FarmerNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';

const FarmerNotifications = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [open, setOpen] = useState([])
    const [alwaysOpen, setAlwaysOpen] = useState(true);

    const handleOpen = (id) => {
        setOpen(open === id ? 0 : id);
    };

    const handleAlwaysOpen = () => {
        setOpen((cur) => !cur);
    };
    useEffect(() => {
        const res = axios.get(`http://localhost:8080/api/v1/notification`).then((response) => {
            console.log(response.data, "data")
            setData(response.data)
            console.log(data.question, "question")
        })
    }, []);
    return (
        <div>
            <FarmerNav />
            <div className='grid grid-cols-12'>
                <div className='col-start-3 col-end-10 bg-gradient-to-l from-sky-600  to-green-600 mt-10 p-10 pt-6'>
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">ALL NOTIFICATIONS</h2>
                    {data.map((data, index) => {
                        return (
                            <Fragment>
                                <Accordion open={open === data.id}>
                                    <AccordionHeader onClick={() => handleOpen(data.id)} className='text-white'>
                                        {data.type}
                                    </AccordionHeader>
                                    <AccordionBody className='text-white'>
                                        {data.subject}
                                    </AccordionBody>
                                </Accordion>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FarmerNotifications;