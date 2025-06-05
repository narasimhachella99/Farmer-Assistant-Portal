import React, { Fragment, useEffect, useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import ExpertNav from '../Navbar/ExpertNav';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ExpertQuestions = () => {
    const navigate=useNavigate();
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
        const res = axios.get(`http://localhost:8080/api/v1/questions`).then((response) => {
            console.log(response.data, "data")
            setData(response.data)
            console.log(data, "question")
        })
    }, []);
  
    return (
        <div>
            <ExpertNav />
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
                                <div className='flex justify-end'>
                                <button
                                    onClick={() => navigate(`/giveanswer/${data.id}`)}
                                    className="text-white bg-indigo-500 bg-gradient-to-l from-sky-600  to-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Give Answer</button>
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ExpertQuestions;