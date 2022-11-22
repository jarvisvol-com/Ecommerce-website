import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './productmain.css'
export default function Productmain({ pd_id_formain, itemslist }) {

  const [pddetails, setpddetails] = useState([])
  // appi for product details 
  const carthandler = () => {
    itemslist.push(pddetails)
  }
  useEffect(() => {
    async function prodfetch() {
      const res = await Axios.get(`http://localhost:5000/productmain?productid=${pd_id_formain}`)
      setpddetails(res.data)
    }
    prodfetch()
    console.log("inside useeffect of productmain");
  }, [])

  return (
    <div>
      <div className='nav-container'>
        <Navbar />
      </div>
      <div className='product-main'>
        <div >
          <img className='product-img-1' src={`./images/${pddetails.id}.jpg`} alt=''></img>

        </div>
        <div >
          <img className='product-img-2' src={`./images/${pddetails.id}.jpg`} alt=''></img>

        </div>
        <div >
          <img className='product-img-3' src={`./images/${pddetails.id}.jpg`} alt=''></img>

        </div>
        <div >
          <img className='product-img-4' src={`./images/${pddetails.id}.jpg`} alt=''></img>
        </div>
        <div className='product-info'>
          <div className='product-name '>
            {
              pddetails.productDisplayName
            }
          </div>

        </div>
        <div className='size-details'>
          Size-
        </div>
        <div className='product-mrp-details '>
          MRP-{
            pddetails.id / 10
          }
        </div>
        {/* link to cart page  */}
        <Link to="/" onClick={carthandler}>
          <div className='button-position'>
            {/* buy button on product main */}
            <button className='btn-size'> Add to Cart </button>
          </div>
        </Link>
        <div className='product-discription-2'>
          <p>
            this is awesome
          </p>
          <Link to='/cart'>
            <button className='btn btn-primary'>Go to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
