import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './MyComponents/pages/Home'
import Footer from './MyComponents/layout/Footer'
import  Navbar from './MyComponents/layout/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Hello from './components/helloworld'
import WeddingPlannerWebsite from './MyComponents/pages/WeddingPlannerwebsite'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './MyComponents/pages/Contactus'
import Venues from './MyComponents/pages/Venues'
import Venue from './MyComponents/pages/Venue'
import Vendor from './MyComponents/pages/Vendor'
import Login from './MyComponents/pages/Login'
import Signup from './MyComponents/pages/Signup'
import Vendors from './MyComponents/pages/Vendors'
import Pandits from './MyComponents/pages/Pandits'
import Dj from './MyComponents/pages/DJ'
import Mehendi from './MyComponents/pages/Mehendi'
import Gift from './MyComponents/pages/Gift'
import Prewedding from './MyComponents/pages/Prewedding'
import Jewellery from './MyComponents/pages/Jewellery'
import Review from './MyComponents/pages/Review'
import Payments from './MyComponents/pages/Payments'
import Photography from './MyComponents/pages/Photography'
import Makeup from './MyComponents/pages/Makeup'
import BookingRequest from './MyComponents/pages/BookingRequest'
import Aboutus from './MyComponents/pages/AboutUs'
import Packages from './MyComponents/pages/Packages'
import Food from './MyComponents/pages/Food'
import Package from './MyComponents/pages/Package'
import Profile from './MyComponents/pages/ProfileSettings'
import Decor from './MyComponents/pages/Wedding_Decor'
import Groom from './MyComponents/pages/Groom_wear'
import Chat from './MyComponents/pages/chat'  

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Contact" element={<ContactUs/>}></Route>
      <Route path="/Venues" element={<Venues/>}></Route>
      <Route path="/Venues/:vname" element={<Venue/>} />
      <Route path="/Vendors" element={<Vendors/>}></Route>  
      <Route path="/:vname/:pname" element={<Vendor/>}></Route>  
      <Route path="/Login" element={<Login/>}></Route>  
      <Route path="/Signup" element={<Signup/>}></Route> 
      <Route path="/Pandits" element={<Pandits/>}></Route> 
      <Route path="/Dj" element={<Dj/>}></Route> 
      <Route path="/Mehendi" element={<Mehendi/>}></Route> 
      <Route path="/Gift" element={<Gift/>}></Route> 
      <Route path="/Prewedding" element={<Prewedding/>}></Route> 
      <Route path="/Jewellery" element={<Jewellery/>}></Route> 
      <Route path="/Review/:category/:name" element={<Review/>}></Route> 
      <Route path="/Payments" element={<Payments/>}></Route> 
      <Route path="/Photography" element={<Photography/>}></Route> 
      <Route path="/Decor" element={<Decor/>}></Route> 
      <Route path="/Groom" element={<Groom/>}></Route> 
      <Route path="/Makeup" element={<Makeup/>}></Route> 
      <Route path="/Aboutus" element={<Aboutus/>}></Route> 
      <Route path="/Packages/:category/:name" element={<Packages/>}></Route> 
      <Route path="/Package/:pname" element={<Package/>} />
      <Route path="/Food" element={<Food/>} />
      <Route path="/ProfileSettings" element={<Profile/>}/>
      <Route path="/BookingRequest" element={<BookingRequest/>}/>
      <Route path="/Chat" element={<Chat/>}/>
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App
