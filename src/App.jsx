import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Home';
import Register from './assets/Register';
import Update from './assets/Update';

import Navbar from './assets/Navbar';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/update/:id' element={<Update />} />

        <Route path='*' element={<Home />} />

      </Routes>

    </>
  )
}

export default App 