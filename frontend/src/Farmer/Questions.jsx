import React, { Fragment, useEffect, useState } from 'react'
import FarmerNav from '../Navbar/FarmerNav';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import axios from 'axios';
const Questions = () => {
    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true);

    const handleOpen = (id) => {
        setOpen(open === id ? 0 : id);
    };

    const handleAlwaysOpen = () => {
        setOpen((cur) => !cur);
    };

    const [data, setData] = useState([])
    useEffect(() => {
        const res = axios.get(`http://localhost:8080/api/v1/questions`).then((response) => {
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
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">ALL QUESTIONS && ANSWRES</h2>
                    
                    {data.map((data, index) => {
                        return (
                            <Fragment>
                                <Accordion open={open === data.id}>
                                    <AccordionHeader onClick={() => handleOpen(data.id)} className='text-white'>
                                        {data.question}
                                    </AccordionHeader>
                                    <AccordionBody className='text-white'>
                                        {data.answer}
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

export default Questions;
