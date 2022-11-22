import React from 'react'
import { Link } from 'react-router-dom'
import './Homeproduct_line_2.css'
export default function Homeproductline2({ productdetail ,pd_id_formain,setpd_id_formain}) {
  return (
    <div className='product_line_2' style={{ width: "338px", height: "354px", border: "1px solid black", marginTop: "4px", marginBottom: "4px" }}>
        <Link to='/productmain' style={{textDecoration: 'none'}}  onClick = {()=>{setpd_id_formain(productdetail.id)}}>
      <div >
        
      <img src={`./images/${productdetail.id}.jpg`}  className='product-image-homecoml2' alt=''></img>
      </div>
      <div className='product-brand-homecoml2'>
        {
          productdetail.articleType
        }
      </div>
      <div className='product-discriptionl2'>
        {productdetail.productDisplayName
        }
      </div>
      <div className='product-price-homcoml2'>
        Rs:
        {
          productdetail.id/10
        }
      </div>
        </Link>

    </div>
  )
}
