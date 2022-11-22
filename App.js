import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Productmain from './Productmain'
import Checkout from'./Checkout'
import Cart from './Cart'
import Return from './Return'
import Products from './Products'

export default function App() {
  const [pd_id_formain, setpd_id_formain] = useState([null])
  const [itemslist, setitemslist] = useState([])
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route>
              
                <Route path='/' element = {<Home pd_id_formain={pd_id_formain} setpd_id_formain={setpd_id_formain}/>}></Route>
                <Route path='/about' element = {<About/>}></Route>
                <Route path='/productmain' element={<Productmain pd_id_formain={pd_id_formain} itemslist = {itemslist} setitemslist={setitemslist} />}></Route>
                <Route path='/cart' element={<Cart itemslist = {itemslist}/>}></Route>
                <Route path='/checkoutpage' element = {<Checkout itemslist = {itemslist}/>}></Route>
                <Route path='/animation' element = {<Return/>}></Route>
                <Route path='/product' element = {<Products  pd_id_formain={pd_id_formain} setpd_id_formain={setpd_id_formain}/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}
