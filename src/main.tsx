import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Footer, Navbar, ScrollToTop } from './components/Layout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import './styles/global.css'
import './styles/refinement.css'
import './styles/light-redesign.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><HashRouter><ScrollToTop /><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/projects" element={<Projects />} /><Route path="/projects/:slug" element={<ProjectDetail />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes><Footer /></HashRouter></React.StrictMode>)
