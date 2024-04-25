import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    // console.log(id)

    const [update, setUpdate] = useState({
        name: '',
        email: '',
        mobileNo: ''
    })

    const fetchUser = async () => {
        const fetchData = await axios.get(`http://localhost:3000/users/${id}`);
        setUpdate(fetchData.data)
        console.log(fetchData.data)
    }
    useEffect(() => {
        fetchUser()
    }, [])

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUpdate({ ...update, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/users/${id}`, update);
            console.log(res && res.data)
            res && res.data ? alert('user updated') : alert('not updated')

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className=' mt-20 w-1/3 mx-auto '>

            <form className='grid  px-8 py-10 rounded-2xl border-2 shadow-green-700 shadow-2xl ' onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>
                <input type="text" placeholder='Name' onChange={handleChange} name='name' value={update.name} id='name' className='  px-4 py-2 rounded-xl bg-slate-200 focus:outline-none focus:border-2 focus:bg-white' />

                <label htmlFor="email" className='mt-4'>Email: </label>
                <input type="email" placeholder='Email' onChange={handleChange} name='email' value={update.email} id='email' className='  px-4 py-2 rounded-xl bg-slate-200 focus:outline-none focus:border-2 focus:bg-white' />

                <label htmlFor="mobileNo" className='mt-4'>Mobile No: </label>
                <input type="tel" placeholder='Mobile No' onChange={handleChange} name='mobileNo' value={update.mobileNo} id="mobileNo" className='  px-4 py-2 rounded-xl bg-slate-200 focus:outline-none focus:border-2 focus:bg-white' />


                <button className='bg-green-700 rounded-full text-white px-5 py-2 hover:bg-green-800 mt-8' type='submit'>
                    Update
                </button>

            </form>

        </div>
    )
}

export default Update