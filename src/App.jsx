import React from 'react';
import Homepage from './components/Homepage';
import BlogApp from './components/blog/frontend/BlogApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<BlogApp />} />
      </Routes>
    </Router>


  )
}
export default App
