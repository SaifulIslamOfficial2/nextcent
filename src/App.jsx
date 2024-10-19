import './App.css'
import Aboute from './Component/Aboute'
import Blog from './Component/Blog'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import NewsLetter from './Component/NewsLetter'
import Product from './Component/product'
import Services from './Component/Services'
import Myfooter from './Component/Myfooter'
import { Modal } from 'flowbite-react'

function App() {
 
  return (
    <>
     <Navbar />
     <Home />
     <Services />
     <Aboute />
     <Product />
     <Blog />
     <NewsLetter />
     <Myfooter />
    <Modal />
     
    </>
  )
}

export default App
