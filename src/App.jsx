import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import your Home component
import About from './pages/About'; // Import your About component
import Blog from './pages/Blog'; // Import your About component
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <div className='bg-red-500 text-lg'>HELLO</div> */}
    </>
  )
}

export default App
