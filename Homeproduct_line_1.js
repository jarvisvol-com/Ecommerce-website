import React from 'react'
import { Link } from 'react-router-dom';
import './Homeproduct_line_1.css'
export default function Homeproductline1({ productdetail ,pd_id_formain,setpd_id_formain}) {
  return (
    <div className='pro_line_1'>
      <Link to= "/productmain" style={{textDecoration: 'none'}}  onClick = {()=>{setpd_id_formain(productdetail.id)}} >
        <div >
          <img src={`./images/${productdetail.id}.jpg`} className='product-image-homecoml1' alt=''></img>
        </div>
        <div className='product-brand-homecoml1'>
          {
            productdetail.articleType


          }
        </div>
        <div className='product-discriptionl1'>
          {productdetail.productDisplayName
          }
        </div>
        <div className='product-price-homcoml1'>
          Rs:{
            productdetail.id / 10
          }
        </div>
      </Link>
    </div>
  )
}
