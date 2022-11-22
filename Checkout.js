import axios from 'axios'
import React, { useState } from 'react'
import './Checkout.css'
import Navbar from './Navbar'

export default function Checkout() {
 
  const [status, setstatus] = useState(false)
  const [addre, setaddre] = useState({})
  const [Address, setAddress] = useState({ Name: null, Address_line_1: null, Address_line_2: null, Mobile_Number: null, Email: null })
  const addresshandler = async () => {
    const res = await axios.post('http://localhost:5000/register/products/ecommerce', Address)
    alert("address is saved ")
    setaddre(res.data)
    setstatus(true)
    
  }
  
  return (
    <div>
      <Navbar />
      <div>
        <div className='address-window'>
          <h3>
            Address Detail
          </h3>
          <div className='detail-1'>
            <label htmlFor='first-name' style={{ marginBottom: "10px" }}>Enter Your Name</label>
            <br></br>
            <input type="text" className='first-name' onChange={(e) => (setAddress({ ...Address, Name: e.target.value }))}></input>

          </div>
          <div className='detail-2'>
            <label htmlFor='address-line-1' style={{ marginBottom: "10px" }}>Address Line-1</label>
            <br></br>
            <input type="text" className='address-line-1' onChange={(e) => (setAddress({ ...Address, Address_line_1: e.target.value }))}></input>

          </div>
          <div className='detail-3'>
            <label htmlFor='address-line-2' style={{ marginBottom: "10px" }}>Address Line-2</label>
            <br></br>
            <input type="text" className='address-line-2' onChange={(e) => (setAddress({ ...Address, Address_line_2: e.target.value }))}></input>

          </div>
          <div className='detail-4'>
            <label htmlFor='mobile-number' style={{ marginBottom: "10px" }} >Mobile Number</label>
            <br></br>
            <input type="number" className='mobile-number' onChange={(e) => (setAddress({ ...Address, Mobile_Number: e.target.value }))}></input>

          </div>
          <div className='email-div'>
            <label htmlFor='email-field' style={{ marginBottom: "10px" }}>Enter your Email</label><br></br>
            <input type="email" className="email-field" onChange={(e) => (setAddress({ ...Address, Email: e.target.value }))}></input>
          </div>
          <div className=' addressofuser'>
            <div className='address-radio'>
              {
                status ? <input type="radio" name="address"></input> : null
              }
            </div> 
            {
              status ? addre.Address_line_1 + " " + addre.Address_line_2 + " " + addre.Mobile_Number : null
            }
          </div>
          <div className='save-address-btn'>
            <button className='btn btn-primary btn-size-of-address' onClick={addresshandler}>Save Address</button>
          </div>

          {/* paymenyt window starts */}

        </div>
        <div className='payment-window'>
          <div style={{ textAlign: "center" }}>
            <h3>
              Payment Info
            </h3>
          </div>
          <div className='text-design'>
            <input type="radio" className="radio-card" name='payment'  ></input>
            <label htmlFor='radio-card' style={{ position: "relative", left: "4px" }}>Card Payment</label>

          </div>
          <div className='text-design'>
            <input type="radio" className="radio-cash" name='payment' ></input>
            <label htmlFor='radio-cash' style={{ position: "relative", left: "4px" }}>Cash on Deliviry</label>

          </div>
          <div className='total-bill'>
            <h4>
              Total Bill =
            </h4>
          </div>
          <div className='postin-pay-btn'>
            <button className='btn btn-outline-success btn-size '>Place Order</button>
          </div>

        </div>
      </div>
    </div>
  )
}
