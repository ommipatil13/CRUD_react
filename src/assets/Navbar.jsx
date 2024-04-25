import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between bg-zinc-800 text-white text-lg py-4 px-6 rounded-full'>
                <div>010101</div>
                <div className='space-x-20 '>
                    <NavLink to={'/'} className='hover:text-zinc-300'>Home</NavLink>
                    <NavLink to={'/register'} className='hover:text-zinc-300'>Register</NavLink>
                    {/* <NavLink to={`/update/${id}`} className='hover:text-zinc-300'>Update</NavLink> */}
                </div>
                <div>101010</div>
            </nav>
        </div>
    )
}

export default Navbar