import React from 'react'
import './cartmain.css'
export default function Cartmain({el}) {
  
  return (
    <div>
      
      <div className='product-cart'>
        <div className='product-details-cart'>
          <h4>
            {
              el.productDisplayName
            }
          </h4>
          <b>
            Size-
          </b>
          <br>
          </br>
          <b>
            Offer - 30% extra off
          </b>
          <br>
          </br>
          <b>
            Price - {el.id/10}/-
          </b>
        </div>
        <div >
              <img src={`./images/${el.id}.jpg`} alt = ""  className='product-img'></img>
        </div>
        
      </div>
    </div>
  )
}
