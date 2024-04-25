import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        const fetchData = await axios.get('http://localhost:3000/users');
        setUser(fetchData.data)
        console.log(fetchData.data)
    }
    useEffect(() => {
        fetchUser()
    }, [])

    const handleDelete = async (id) => {
        // const res = user.filter((val) => val.id !== id);
        // setUser(res);
        await axios.delete(`http://localhost:3000/users/${id}`);
        // window.location.reload();
        fetchUser()
    }
    return (
        <div>

            <table className='shadow-lg shadow-black w-1/2 mx-auto mt-5 text-center '>
                <thead className='bg-zinc-200 text-lg'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th className='text-green-600'>Update</th>
                        <th className='text-red-600'>Delete</th>
                    </tr>
                </thead>

                <tbody className='bg-zinc-300'>

                    {user.map((item) => {
                        return (
                            <tr key={item.id} className='border-2 '>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobileNo}</td>
                                <td><Link to={`/update/${item.id}`} className='bg-green-500 text-white px-4 py-2 rounded-s-full hover:bg-green-600' >Update</Link></td>
                                <td><button className='bg-red-500 text-white px-4 py-2 rounded-s-full hover:bg-red-600' onClick={() => handleDelete(item.id)}  >Delete</button></td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Home