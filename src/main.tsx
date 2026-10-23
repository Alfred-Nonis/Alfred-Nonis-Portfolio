import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Footer, Navbar, ScrollToTop } from './components/Layout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { Experience, ExperienceDetail } from './pages/Experience'
import './styles/global.css'
import './styles/refinement.css'
import './styles/light-redesign.css'
import './styles/ux-foundation.css'
import './styles/experience.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <ScrollToTop /><Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/baja" element={<Navigate to="/projects/baja-sae-chassis" replace />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </MotionConfig>
  </React.StrictMode>,
)
