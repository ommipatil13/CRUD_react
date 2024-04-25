import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        mobileNo: ''
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fetchApi = await axios.post('http://localhost:3000/users', user);
            if (fetchApi && fetchApi.data) {
                console.log("user register successfully");
                alert('user register')
            }
            else {
                alert('not registered');
            }
            console.log(fetchApi.data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=' mt-20 w-1/3 mx-auto '>

            <form className='grid  px-8 py-10 rounded-2xl border-2 shadow-blue-700 shadow-2xl ' onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>
                <input type="text" onChange={handleChange} placeholder='Name' name='name' value={user.name} id='name' className='  px-4 py-2 rounded-xl bg-slate-200 focus:outline-none focus:border-2 focus:bg-white' />

                <label htmlFor="email" className='mt-4'>Email: </label>
                <input type="email" onChange={handleChange} placeholder='Email' id='email' name='email' value={user.email} className='  px-4 py-2 rounded-xl bg-slate-200 focus:outline-none focus:border-2 focus:bg-white' />

                <label htmlFor="mobileNo" className='mt-4'>Mobile No: </label>
                <input type="tel" onChange={handleChange} placeholder='Mobile No' id="mobileNo" name='mobileNo' value={user.mobileNo} className='  px-4 py-2 rounded-xl bg-slate-200 focus:outline-none focus:border-2 focus:bg-white' />


                <button type='submit' className='bg-blue-700 rounded-full text-white px-5 py-2 hover:bg-blue-800 mt-8'>
                    Submit
                </button>

            </form>

        </div>
    )
}

export default Register