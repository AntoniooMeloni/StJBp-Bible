import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from '../Pages/Home.jsx'
import Bible from '../Pages/Bible.jsx'
import Prayer from '../Pages/Prayer.jsx'
import Devotional from '../Pages/Devotional.jsx'
import Forum from '../Pages/Forum.jsx'
import Music from '../Pages/Music.jsx'
import Parish from '../Pages/Parish.jsx'
import Donations from '../Pages/Donations.jsx'
import CatholicAI from '../Pages/CatholicAI.jsx'
import Rosary from '../Pages/Rosary.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bible" element={<Bible />} />
        <Route path="prayer" element={<Prayer />} />
        <Route path="devotional" element={<Devotional />} />
        <Route path="forum" element={<Forum />} />
        <Route path="music" element={<Music />} />
        <Route path="parish" element={<Parish />} />
        <Route path="donations" element={<Donations />} />
        <Route path="catholic-ai" element={<CatholicAI />} />
        <Route path="rosary" element={<Rosary />} />
      </Route>
    </Routes>
  )
}

export default App
