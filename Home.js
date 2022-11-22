import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Homecomponentofproducts from './Homecomponentofproducts'
export default function Home({pd_id_formain, setpd_id_formain}) {


  return (
    <div>
      <div className='nav-container'>
        <Navbar />
      </div>
      <div className='home-container'>

      </div>
      <div className='men-container'>

      </div>
      <div className="women-container">

      </div>
      <div className='offer-container'>
        50% OFF Both Men's And Womens's Fashion
      </div>

      
      
        {/* <div className='product-container-1'>

        </div>
        <div className='product-discription'> Classic Men's Shoe </div>

        <div className='price-container'>
          Price-2999
        </div>

        <div className='buy-btn'>
          <button type="button" className="btn btn-outline-success btn-sm">Buy  </button>
        </div> */}
        <Homecomponentofproducts  pd_id_formain={pd_id_formain} setpd_id_formain={setpd_id_formain}/>
      

      {/* <div className='star postin-str-1'>
        <span >&#9734;</span>
      </div>
      <div className='star postin-str-2'>
        <span >&#9734;</span>
      </div>
      <div className='star postin-str-3'>
        <span >&#9734;</span>
      </div>
      <div className='star postin-str-4'>
        <span >&#9734;</span>
      </div>
      <div className='star postin-str-5'>
        <span >&#9734;</span>
      </div>
      <div className='product-container-2'>
        <div className='product-image-2'>

        </div>
        <div className='product-discription-2'>

        </div>
        <div className='product-price'>
          Rs-1999/-
        </div>
        <div className='raiting-container'>
          <span className='str-1' >&#9734;</span>
          <span className='str-2' >&#9734;</span>
          <span className='str-3' >&#9734;</span>
          <span className='str-4' >&#9734;</span>
          <span className='str-5' >&#9734;</span>
        </div>
      </div> */}

    </div>
  )
}
