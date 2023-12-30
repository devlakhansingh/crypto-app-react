import React from 'react'
import Navbar from './components/Navbar'
import ListGroup from './components/ListGroup'
import coinContainer from './components/CoinsContainer'
import CoinsContainer from './components/CoinsContainer'
import { CoinProvider } from './context/coin/CoinContext'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoinPage from './pages/CoinPage'




const App = () => {
  return (
    <Router>

      <CoinProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:coinId' element={<CoinPage />} />
        </Routes>
      
      </CoinProvider>
    </Router>
  )
}

export default App
