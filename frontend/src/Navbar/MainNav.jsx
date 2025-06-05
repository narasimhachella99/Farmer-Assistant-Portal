import React from 'react'

const MainNav = () => {
    return (
        <div>
            <nav class="self-center  w-full py-3 bg-gradient-to-l from-sky-600  to-green-600">
                <div class="flex md:flex-row flex-col  justify-between items-center md:items-start">
                    <h1 class=" py-4 text-3xl font-sans font-bold text-slate-300 px-10">Farmer Assistant Portal</h1>
                    <ul class="flex justify-center my-4 items-center text-sm md:text-[18px] font-bold  md:px-10">
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                            <a href="/">Home</a>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                            <a href="/farmerLogin">Farmer</a>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                            <a href="/expertlogin">Expert</a>
                        </li>
                        <li
                            class="hover:underline text-slate-300 underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                            <a href="/buyerlogin">Buyer</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default MainNav;


