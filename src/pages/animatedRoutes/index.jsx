import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../home'
import Tarif from '../tarif'
import About from '../about'
import Session from '../session'
import { AnimatePresence } from 'framer-motion'


export default function AnimatedRoutes() {
    const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/session" element={<Session />} />
            <Route path="/tarif" element={<Tarif />} />
        </Routes> 
    </AnimatePresence>
  )
}
