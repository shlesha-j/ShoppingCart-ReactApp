
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Navbar from './component/Navbar/Navbar'



function App() {


  return (
    
    <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/cart" element={<Cart fallback={<p>Something went wrong</p>}/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route path='*' element={<NotFound/>}/> */}
          </Routes>
        </main>
      </Router>
  )
}

export default App
