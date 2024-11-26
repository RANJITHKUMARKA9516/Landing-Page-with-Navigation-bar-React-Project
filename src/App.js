import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import PostDetails from './components/PostDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Posts' element={<Post />} />
    <Route path='/Posts/:postId' element={<PostDetails />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App