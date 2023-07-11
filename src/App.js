import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Artist from './pages/Artist/Artist'
import Contact from './pages/Contact/Contact'
import Digitalwork from './pages/Digitalwork/Ditigalwork'
import Faq from './pages/FAQ/Faq'

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/artist' element={<Artist/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/digitalwork' element={<Digitalwork/>}/>
            <Route path='/faq' element={<Faq/>}/>
        </Routes>
    </BrowserRouter>
}

export default App