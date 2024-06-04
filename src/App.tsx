import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Product from './components/products/Product'
import ProductDetail from './components/products/ProductDetail'
import ProductDetail1 from './components/BT/Bt1/ProductDetail1'
import Student from './components/BT/Bt2/Student'
import Employee from './components/BT/Bt3/Employee'
import Login5 from './components/BT/Bt5/Login5'
import PrivateRouter from './components/BT/Bt5/PrivateRouter'
import Account from './components/BT/Bt5/Account'

export default function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/home" element={<Home></Home>}>
          <Route path='/home/header' element={<Header/>}></Route>
        </Route>

        <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/productDetail/:params' element={<ProductDetail/>}></Route>
      </Routes> */}

      <Routes>
        <Route path='/product/:id' element={<ProductDetail1/>}></Route>
        <Route path='/student/:name' element={<Student/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>

        <Route path='/login' element={<Login5/>}></Route>
        <Route path='/privateRouter' element={<PrivateRouter/>}>
        <Route path='account' element={<Account/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}
